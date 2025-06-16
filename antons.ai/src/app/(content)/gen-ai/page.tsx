import React from "react";
import Link from "next/link";

export default function GenAIUnderConstruction() {
  return (
    <div className="min-h-screen bg-[#EFEFEF] flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl flex flex-col items-center py-16 px-6 border border-[#F0F0F0]">
        <div className="w-full flex flex-col items-center mb-8">
          <span className="inline-block mb-6">
            {/* Simple icon for visual interest */}
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="24" fill="#F9FF00" />
              <path d="M24 14v12" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="24" cy="32" r="2" fill="#000"/>
            </svg>
          </span>
          <h1 className="text-3xl font-bold font-[Trim] text-black mb-2 text-center">
            Seite im Aufbau
          </h1>
          <p className="text-base font-[Trim] text-[#444] text-center">
            Wir arbeiten daran, diese Seite für dich bereitzustellen.<br />
            Schau bald wieder vorbei!
          </p>
        </div>
        <Link
            href={'/'}
          className="mt-6 rounded-full bg-black text-white font-[Trim] font-bold py-3 px-8 text-base transition hover:bg-[#222]"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}