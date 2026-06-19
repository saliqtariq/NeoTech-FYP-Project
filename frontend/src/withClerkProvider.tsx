import { ClerkProvider } from '@clerk/clerk-react';
import React from 'react';

// Replace with your actual Clerk publishable key
const clerkPubKey = import.meta.env.VITE_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Validate the key format (Clerk keys always start with pk_test_ or pk_live_)
// We also treat the placeholder "************************************" as invalid.
export const isClerkEnabled = typeof clerkPubKey === 'string' && 
  clerkPubKey.startsWith('pk_') && 
  !clerkPubKey.includes('***');

export const withClerkProvider = (Component: React.FC) => (props: any) => {
  if (!isClerkEnabled) {
    if (import.meta.env.DEV) {
      console.warn("Clerk Publishable Key is missing or invalid. Auth features are disabled.");
    }
    return <Component {...props} />;
  }

  return (
    <ClerkProvider 
      publishableKey={clerkPubKey}
      signInFallbackRedirectUrl={import.meta.env.VITE_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL}
      signUpFallbackRedirectUrl={import.meta.env.VITE_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL}
    >
      <Component {...props} />
    </ClerkProvider>
  );
};

// NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_dXNhYmxlLWdlbGRpbmctMTMuY2xlcmsuYWNjb3VudHMuZGV2JA
// CLERK_SECRET_KEY=sk_test_BbQZT6f6m7zGBD2mFqkIevEmfUNWoDp8Fc4YPxfFhC
