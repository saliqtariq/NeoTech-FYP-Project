import React from "react";
import { useSignIn, useSignUp } from "@clerk/clerk-react";
import { isClerkEnabled } from "@/withClerkProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CustomSignIn() {
  const clerk = isClerkEnabled ? useSignIn() : { signIn: null, setActive: null, isLoaded: true };
  const { signIn, setActive, isLoaded } = clerk;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!isLoaded) return;
    try {
      const result = await signIn.create({ identifier: email, password });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/");
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Sign in failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 to-blue-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-2xl px-8 py-10 w-full max-w-md flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-blue-900 text-center">Sign In</h2>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700">Email address</label>
          <input
            type="email"
            className="rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-2 rounded-lg mt-2">Sign In</Button>
        <div className="text-center text-sm mt-2">
          Don't have an account? <a href="/sign-up" className="text-blue-900 font-semibold hover:underline">Sign up</a>
        </div>
      </form>
    </div>
  );
}

export function CustomSignUp() {
  const clerk = isClerkEnabled ? useSignUp() : { signUp: null, setActive: null, isLoaded: true };
  const { signUp, setActive, isLoaded } = clerk;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!isLoaded) return;
    try {
      await signUp.create({ emailAddress: email, password });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Sign up failed");
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!isLoaded) return;
    try {
      const result = await signUp.attemptEmailAddressVerification({ code });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/");
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Verification failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 to-blue-50">
      <form
        onSubmit={pendingVerification ? handleVerify : handleSubmit}
        className="bg-white rounded-3xl shadow-2xl px-8 py-10 w-full max-w-md flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-blue-900 text-center">Sign Up</h2>
        {!pendingVerification ? (
          <>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Email address</label>
              <input
                type="email"
                className="rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-2 rounded-lg mt-2">Sign Up</Button>
            <div className="text-center text-sm mt-2">
              Already have an account? <a href="/sign-in" className="text-blue-900 font-semibold hover:underline">Sign in</a>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Verification Code</label>
              <input
                type="text"
                className="rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={code}
                onChange={e => setCode(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-2 rounded-lg mt-2">Verify Email</Button>
          </>
        )}
      </form>
    </div>
  );
}
