/**
 * Centralized location detection utility.
 * Uses api.country.is as a reliable free alternative to ipwho.is.
 */

export interface LocationData {
    country: string;
    isPakistan: boolean;
    currency: string;
}

export const detectLocation = async (): Promise<LocationData> => {
    // Provider 1: country.is (Simple, fast, reliable, no CORS issues usually)
    try {
        const response = await fetch("https://api.country.is");
        if (response.ok) {
            const data = await response.json();
            const countryCode = data?.country || "Unknown";

            let currency = "USD";
            if (countryCode === "PK" || countryCode === "QA") currency = "PKR";
            else if (countryCode === "AE") currency = "AED";

            return {
                country: countryCode,
                isPakistan: countryCode === "PK" || countryCode === "QA",
                currency
            };
        }
    } catch (e) {
        // Silent failure for provider 1
    }

    // Provider 2: Cloudflare Trace (Text-based resilient fallback)
    try {
        const response = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
        if (response.ok) {
            const text = await response.text();
            const locLine = text.split("\n").find(line => line.startsWith("loc="));
            const countryCode = locLine ? locLine.split("=")[1] : "Unknown";

            let currency = "USD";
            if (countryCode === "PK" || countryCode === "QA") currency = "PKR";
            else if (countryCode === "AE") currency = "AED";

            return {
                country: countryCode,
                isPakistan: countryCode === "PK" || countryCode === "QA",
                currency
            };
        }
    } catch (e) {
        // Silent failure for provider 2
    }

    // Provider 3: ipapi.co (Excellent for currency detection, but has rate limits/CORS)
    try {
        const response = await fetch("https://ipapi.co/json/");
        if (response.ok) {
            const data = await response.json();
            const countryCode = data?.country_code || "Unknown";
            const currencyCode = data?.currency || "USD";

            return {
                country: countryCode,
                isPakistan: countryCode === "PK" || countryCode === "QA",
                currency: currencyCode
            };
        }
    } catch (e) {
        // Silent failure for provider 3
    }

    // Default fallback
    return {
        country: "Unknown",
        isPakistan: false,
        currency: "USD",
    };
};
