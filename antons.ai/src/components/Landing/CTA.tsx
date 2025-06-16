import React from "react";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="flex items-center justify-center bg-white py-16 mt-20 px-8">
      {/* Left: Circular Image */}
      <div className="flex-shrink-0">
        <div className="w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-[#A48BFF] flex items-center justify-center shadow-lg">
          <Image
            src="/team-photo.png" // Place your image in public/team-photo.png
            alt="Team"
            width={280}
            height={280}
            className="object-cover"
            priority
          />
        </div>
      </div>
      {/* Right: Content */}
      <div className="ml-12 max-w-xl">
        <h2 className="text-4xl font-bold font-[Trim] leading-tight mb-8">
          Warum Unternehmen
          <br />
          risikolos mit uns arbeiten
        </h2>
        <ul className="space-y-6">
          <li>
            <div className="flex items-center mb-1">
              <span className="mr-3">
                {/* Icon: Paper plane */}
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
                  />
                </svg>
              </span>
              <span className="font-bold font-[Trim] text-lg">
                100% Free Test.
              </span>
            </div>
            <div className="text-sm text-[#6B6B6B] font-[Trim] ml-8">
              Kein Retainer. Keine Onboarding Gebühren. Du bezahlst nur für
              Ergebnisse.
            </div>
          </li>
          <li>
            <div className="flex items-center mb-1">
              <span className="mr-3">
                {/* Icon: Sparkles */}
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              </span>
              <span className="font-bold font-[Trim] text-lg">
                Exklusive AI-Assistants
              </span>
            </div>
            <div className="text-sm text-[#6B6B6B] font-[Trim] ml-8">
              Niemals generisch. Sondern gezielt für deinen Use Case aufgebaut und
              trainiert.
            </div>
          </li>
          <li>
            <div className="flex items-center mb-1">
              <span className="mr-3">
                {/* Icon: Rocket */}
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M2 16.5V21h4.5l13.36-13.36-4.5-4.5L2 16.5zm3 2.5H4v-1l11.06-11.06 1 1L5 19zm14.85-13.44a1.5 1.5 0 0 0 0-2.12l-2.12-2.12a1.5 1.5 0 0 0-2.12 0l-1.83 1.83 4.24 4.24 1.83-1.83z"
                  />
                </svg>
              </span>
              <span className="font-bold font-[Trim] text-lg">
                Skalierung ab Tag 7
              </span>
            </div>
            <div className="text-sm text-[#6B6B6B] font-[Trim] ml-8">
              Vom Demo zu live in 7 Werktagen: Trustfully made in Frankfurt am
              Main.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
