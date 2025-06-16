"use client";
import Header from "@/components/Landing/Header";
import TopHeader from "@/components/Landing/TopHeader";
import { supabase } from "@/lib/utils/supabaseClient";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <TopHeader />
      <div className="min-h-screen bg-[#EFEFEF]">
        <Header />
        <div className="mx-auto rounded-md">
          {/* Dashboard Banner */}
          <div className="w-full bg-[#F9FF00] py-16 flex flex-col items-center">
            <div>
            <h1 className="text-[64px] leading-[64px] font-bold font-[Trim] text-black mb-2">
              Dashboard
            </h1>
            <p className="text-base font-[Trim] font-light text-black text-left">
              Registriere dich und erhalte Zugang zu deinem<br />
              persönlichen Kundenbereich.
            </p>
            </div>
          </div>
          {/* Login Form */}
          <div className="flex flex-col items-center py-12">
            <form onSubmit={handleLogin} className="w-full max-w-xs flex flex-col gap-4">
              <input
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-[336px] h-[50px] rounded-[25px] px-6 bg-white border border-[#E5E5E5]"
                required
              />
              <input
                type="password"
                placeholder="Passwort"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-[336px] h-[50px] rounded-[25px] px-6 bg-white border border-[#E5E5E5]"
                required
              />
              {error && <div className="text-red-600 leading-8 text-sm text-center font-[Trim]">{error}</div>}
              <div className="text-xs text-[#A8A8A8] font-[Trim] mt-2 mb-4 text-center">
                Indem du fortfährst, stimmst du den...
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-black text-white font-[Trim] font-bold py-3 text-base transition hover:bg-[#222] flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Lädt...
                  </span>
                ) : (
                  "Weiter"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}