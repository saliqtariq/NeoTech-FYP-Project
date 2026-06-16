/**
 * DEPRECATED: This file is no longer the source of truth for course pricing.
 * All pricing data is now fetched dynamically from the /courses API.
 * This file is kept only for the CoursePricing interface type definition.
 */

export const BASIC_USD_PRICE = 99;

export interface CoursePricing {
  id: string;
  name: string;
  keywords: string[];
  pricePKR: number;
  priceUSD: number; // Base for global conversion
  priceAED: number; // Base for UAE
  durationMonths: number;
  path: string;
}

// Fallback data removed to ensure API-first consistency
export const pakistanCoursePricing: CoursePricing[] = [];

export const getPKPricing = (courseName: string): CoursePricing | undefined => {
  console.warn("getPKPricing is DEPRECATED. Use the useCourses hook instead.");
  return undefined;
};
