/**
 * Exchange rate utility using Frankfurter API (Free & Open Source).
 * Frankfurter provides real-time exchange rates from the European Central Bank.
 */

const BASE_URL = "https://api.frankfurter.dev/v1";

export interface ExchangeRates {
    [key: string]: number;
}

/**
 * Fetches the latest exchange rates from USD to other currencies.
 */
export const getExchangeRates = async (base: string = "USD"): Promise<ExchangeRates | null> => {
    try {
        const response = await fetch(`${BASE_URL}/latest?base=${base}`);
        if (!response.ok) {
            throw new Error(`Frankfurter API error: ${response.status}`);
        }
        const data = await response.json();
        return data.rates || null;
    } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
        return null;
    }
};

/**
 * Formats a price with the correct currency symbol and decimals.
 */
export const formatCurrency = (amount: number, currency: string): string => {
    try {
        return new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    } catch (e) {
        // Fallback if Intl fails
        return `${currency} ${amount.toFixed(0)}`;
    }
};
