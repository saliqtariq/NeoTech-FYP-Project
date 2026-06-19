import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { detectLocation } from "@/lib/location";
import { getExchangeRates } from "@/lib/exchange-rate";

interface CartItem {
    id: string; // Course name or unique identifier
    paymentPlan: 'pay_monthly' | 'pay_full';
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: string) => void;
    removeFromCart: (item: string) => void;
    updatePaymentPlan: (item: string, plan: 'pay_monthly' | 'pay_full') => void;
    clearCart: () => void;
    cartCount: number;
    isPakistan: boolean;
    isUAE: boolean;
    locationLoading: boolean;
    currency: string;
    country: string;
    exchangeRate: number;
    formatPrice: (courseOrUsd: any, pkrAmount?: number) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isPakistan, setIsPakistan] = useState(false);
    const [isUAE, setIsUAE] = useState(false);
    const [currency, setCurrency] = useState("USD");
    const [country, setCountry] = useState("Unknown");
    const [exchangeRate, setExchangeRate] = useState(1);
    const [locationLoading, setLocationLoading] = useState(true);

    // Detect location and fetch exchange rate once globally
    useEffect(() => {
        const checkLocation = async () => {
            try {
                setLocationLoading(true);
                const loc = await detectLocation();

                setIsPakistan(loc.isPakistan);
                setIsUAE(loc.country === 'AE');
                setCurrency(loc.currency);
                setCountry(loc.country);

                // Fetch exchange rate for conversion (Always from USD for non-PK users)
                // If Pakistan, we use a fixed rate or PKR base.
                const rates = await getExchangeRates("USD");
                if (rates) {
                    const displayCurrency = loc.currency;
                    // For display, we want the local currency rate relative to USD
                    if (rates[displayCurrency]) {
                        setExchangeRate(rates[displayCurrency]);
                    } else if (loc.isPakistan) {
                        setExchangeRate(280); // Fallback for Pakistan
                    } else if (loc.country === 'AE') {
                        setExchangeRate(3.67); // Fixed AED rate
                    }
                } else if (loc.isPakistan) {
                    setExchangeRate(280);
                } else if (loc.country === 'AE') {
                    setExchangeRate(3.67);
                }
            } catch (error) {
                console.error("Global Geo/Currency Error:", error);
                // Last ditch fallback if everything fails for Pakistan
                const locCheck = await detectLocation().catch(() => ({ isPakistan: false, country: 'Unknown', currency: 'USD' }));
                if (locCheck.isPakistan) setExchangeRate(280);
            } finally {
                setLocationLoading(false);
            }
        };
        checkLocation();
    }, []);

    /**
     * Helper to format price based on location and currency.
     * Extracts exact predefined prices from course DB objects.
     */
    const formatPrice = (courseOrUsd: any, pkrAmount?: number): string => {
        if (locationLoading) {
            return "Loading...";
        }

        // Backwards compatibility for formatPrice(usd, pkr)
        if (typeof courseOrUsd === "number") {
            if (isPakistan && pkrAmount !== undefined) {
                return `Rs. ${pkrAmount.toLocaleString()}`;
            }
            if (isUAE) {
                return `AED ${Math.round(courseOrUsd * 3.67).toLocaleString()}`;
            }
            if (!isPakistan && !isUAE && currency !== "USD") {
                const convertedAmount = Math.round(courseOrUsd * exchangeRate);
                return new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                }).format(convertedAmount);
            }
            return `$${courseOrUsd.toLocaleString()}`;
        }

        const course = courseOrUsd;
        if (!course) return "";

        if (isPakistan && course.pricePKR) {
            return `Rs. ${course.pricePKR.toLocaleString()}`;
        }

        if (isUAE && course.priceAED) {
            return `AED ${course.priceAED.toLocaleString()}`;
        }

        const usdPrice = course.priceUSD || 99;

        if (!isPakistan && !isUAE && currency !== "USD") {
            const convertedAmount = Math.round(usdPrice * exchangeRate);
            return new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: currency,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(convertedAmount);
        }

        return `$${usdPrice.toLocaleString()}`;
    };

    // Load cart from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem("neotech_cart");
        if (savedCart) {
            try {
                const parsed = JSON.parse(savedCart);
                if (Array.isArray(parsed)) {
                    // Migrate legacy string array to new object format if necessary
                    const migrated = parsed.map(item => {
                        if (typeof item === 'string') {
                            return { id: item, paymentPlan: 'pay_monthly' as const };
                        }
                        return item;
                    });
                    setCartItems(migrated);
                }
            } catch (error) {
                console.error("Failed to parse cart from local storage:", error);
            }
        }
    }, []);

    const addToCart = (item: string) => {
        setCartItems((prev: CartItem[]) => {
            if (prev.find(i => i.id === item)) return prev;
            const updated: CartItem[] = [...prev, { id: item, paymentPlan: 'pay_monthly' as const }];
            localStorage.setItem("neotech_cart", JSON.stringify(updated));
            return updated;
        });
    };

    const updatePaymentPlan = (item: string, plan: 'pay_monthly' | 'pay_full') => {
        setCartItems(prev => {
            const updated = prev.map(cartItem =>
                cartItem.id === item ? { ...cartItem, paymentPlan: plan } : cartItem
            );
            localStorage.setItem("neotech_cart", JSON.stringify(updated));
            return updated;
        });
    };

    const removeFromCart = (item: string) => {
        setCartItems(prev => {
            const updated = prev.filter(i => i.id !== item);
            localStorage.setItem("neotech_cart", JSON.stringify(updated));
            return updated;
        });
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("neotech_cart");
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updatePaymentPlan,
            clearCart,
            cartCount: cartItems.length,
            isPakistan,
            isUAE,
            locationLoading,
            currency,
            country,
            exchangeRate,
            formatPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
