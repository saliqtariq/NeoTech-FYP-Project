import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function CustomSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
        window.location.reload();
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Sign in failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-xl border border-gray-100 px-8 py-10 w-full max-w-md flex flex-col gap-5"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
          <p className="text-sm text-slate-500 mt-1">Sign in to your NeoTech account</p>
        </div>

        <div className="flex flex-col gap-1.5 mt-2">
          <label className="font-medium text-slate-700 text-sm">Email Address</label>
          <input
            type="email"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-700 text-sm">Password</label>
          <input
            type="password"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="text-red-500 text-sm text-center bg-red-50 p-2.5 rounded-lg">{error}</div>}

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-all shadow-md mt-2"
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>

        <div className="text-center text-sm text-slate-600 mt-2">
          Don't have an account?{" "}
          <a href="/sign-up" className="text-blue-600 font-semibold hover:underline">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
}

export function CustomSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/api/auth/signup`, {
        name,
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setSuccess("Account created successfully! Redirecting...");
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 1500);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-xl border border-gray-100 px-8 py-10 w-full max-w-md flex flex-col gap-5"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Create Account</h2>
          <p className="text-sm text-slate-500 mt-1">Join NeoTech & save your records in MongoDB</p>
        </div>

        <div className="flex flex-col gap-1.5 mt-2">
          <label className="font-medium text-slate-700 text-sm">Full Name</label>
          <input
            type="text"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-700 text-sm">Email Address</label>
          <input
            type="email"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-700 text-sm">Password</label>
          <input
            type="password"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        {error && <div className="text-red-500 text-sm text-center bg-red-50 p-2.5 rounded-lg">{error}</div>}
        {success && <div className="text-emerald-600 text-sm text-center bg-emerald-50 p-2.5 rounded-lg">{success}</div>}

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-all shadow-md mt-2"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </Button>

        <div className="text-center text-sm text-slate-600 mt-2">
          Already have an account?{" "}
          <a href="/sign-in" className="text-blue-600 font-semibold hover:underline">
            Sign in
          </a>
        </div>
      </form>
    </div>
  );
}

