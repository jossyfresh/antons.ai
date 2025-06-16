"use client";
import Header from "@/components/Landing/Header";
import TopHeader from "@/components/Landing/TopHeader";
import React, { useState } from "react";
import { supabase } from "@/lib/utils/supabaseClient";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    firma: "",
    strasse: "",
    plz: "",
    stadt: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          vorname: form.vorname,
          nachname: form.nachname,
          firma: form.firma,
          strasse: form.strasse,
          plz: form.plz,
          stadt: form.stadt,
        },
      },
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
  };

  return (
    <div>
      <TopHeader />
      <div className="min-h-screen bg-[#EFEFEF]">
        {/* Banner */}
        <Header />
        <div className="w-full py-20 flex flex-col items-center border border-[#ffffff] bg-[#EFEFEF]">
          <h1 className="text-[64px] leading-[64px] font-bold font-[Trim] text-black mb-2">
            Registrierung
          </h1>
          <p className="text-base font-[Trim] text-black">
            Registriere dich und erhalte Zugang zu deinem<br />
            persönlichen Kundenbereich.
          </p>
        </div>
        {/* Registration Form */}
        <div className="flex flex-col items-center py-12">
          {success ? (
            <div className="bg-white rounded-2xl p-8 shadow-md text-center max-w-md">
              <h2 className="text-2xl font-bold font-[Trim] mb-4 text-black">Bestätige deine E-Mail</h2>
              <p className="text-base font-[Trim] text-[#444] mb-6">
                Wir haben dir eine Bestätigungs-E-Mail geschickt.<br />
                Bitte bestätige deine E-Mail-Adresse, um dein Konto zu aktivieren.<br />
                Nach der Bestätigung kannst du dich <span className="font-bold">einloggen</span>.
              </p>
              <button
                className="rounded-full bg-black text-white font-[Trim] font-bold py-3 px-8 text-base transition hover:bg-[#222]"
                onClick={() => router.push("/login")}
              >
                Zur Login-Seite
              </button>
            </div>
          ) : (
            <form
              className="w-full max-w-xs flex flex-col gap-4"
              onSubmit={handleRegister}
            >
              <input
                type="text"
                name="vorname"
                placeholder="Vorname"
                value={form.vorname}
                onChange={handleChange}
                className="w-[336px] h-[50px] rounded-[25px] px-6 bg-white border border-[#E5E5E5] text-black font-[Trim] text-base outline-none focus:ring-2 focus:ring-[#A8A8A8] opacity-100"
                required
              />
              <input
                type="text"
                name="nachname"
                placeholder="Nachname"
                value={form.nachname}
                onChange={handleChange}
                className="w-[336px] h-[50px] rounded-[25px] px-6 bg-white border border-[#E5E5E5] text-black font-[Trim] text-base outline-none focus:ring-2 focus:ring-[#A8A8A8] opacity-100"
                required
              />
              <input
                type="text"
                name="firma"
                placeholder="Firma"
                value={form.firma}
                onChange={handleChange}
                className="w-[336px] h-[50px] rounded-[25px] px-6 bg-white border border-[#E5E5E5] text-black font-[Trim] text-base outline-none focus:ring-2 focus:ring-[#A8A8A8] opacity-100"
              />
              <span className="text-center text-[#A8A8A8] font-[Trim] font-light text-xs">
                Rechnungsadresse
              </span>
              <input
                type="text"
                name="strasse"
                placeholder="Straße"
                value={form.strasse}
                onChange={handleChange}
                className="w-[336px] h-[50px] rounded-[25px] px-6 bg-white border border-[#E5E5E5] text-black font-[Trim] text-base outline-none focus:ring-2 focus:ring-[#A8A8A8] opacity-100"
              />
              <input
                type="text"
                name="plz"
                placeholder="Postleitzahl"
                value={form.plz}
                onChange={handleChange}
                className="w-[336px] h-[50px] rounded-[25px] px-6 bg-white border border-[#E5E5E5] text-black font-[Trim] text-base outline-none focus:ring-2 focus:ring-[#A8A8A8] opacity-100"
              />
              <input
                type="text"
                name="stadt"
                placeholder="Stadt"
                value={form.stadt}
                onChange={handleChange}
                className="w-[336px] h-[50px] rounded-[25px] px-6 bg-white border border-[#E5E5E5] text-black font-[Trim] text-base outline-none focus:ring-2 focus:ring-[#A8A8A8] opacity-100"
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail"
                value={form.email}
                onChange={handleChange}
                className="w-[336px] h-[50px] rounded-[25px] px-6 bg-white border border-[#E5E5E5] text-black font-[Trim] text-base outline-none focus:ring-2 focus:ring-[#A8A8A8] opacity-100"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Passwort"
                value={form.password}
                onChange={handleChange}
                className="w-[336px] h-[50px] rounded-[25px] px-6 bg-white border border-[#E5E5E5] text-black font-[Trim] text-base outline-none focus:ring-2 focus:ring-[#A8A8A8] opacity-100"
                required
              />
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              <button
                type="submit"
                className="w-[120px] mt-4 mx-auto rounded-full bg-black text-white font-[Trim] font-bold py-3 text-base transition hover:bg-[#222] flex items-center justify-center"
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
          )}
        </div>
      </div>
    </div>
  );
}