import React from "react";
import styles from "./OfferPreview.module.css";
import Image from "next/image";

// interface OfferPreviewProps {
//   offer: any;
// }

const OfferPreview = () => {
  return (
    <div className={styles.previewWrapper}>
      <div className="text-5xl font-[Trim] text-[#5a61ed] absolute top-1/2 -left-2 z-50 transform rotate-90">
        <Image
          className="w-32 h-32"
          src={"/anton.svg"}
          alt=""
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex justify-between items-start mb-8 z-50 font-[Trim]">
        <div className="space-y-1 items-end self-center align-bottom">
          <div className=" text-sm">Bruno Interior GmbH</div>
          <div className="text-sm">Kastanienallee 98b</div>
          <div className="text-sm">10435 Berlin</div>
        </div>

        <div className="text-right space-y-1 text-xs">
          <div className="font-bold">STUDIO ANTON OHG</div>
          <div>SCHAUMAINKAI 39</div>
          <div>60594 FRANKFURT AM MAIN</div>
          <div className="mt-3 font-bold">INTERSECTION</div>
          <div className="font-bold">OF STRATEGY & FEEL</div>
          <div className="mt-2">HIGH LEVEL</div>
          <div className="">GEN-AI DESIGN SERVICES</div>

          <div className="mt-4 space-y-1">
            <div className="font-bold">BANK</div>
            <div>FRANKFURTER SPARKASSE</div>
            <div>IBAN DE22 5005 0201 0200 6898 35</div>
          </div>

          <div className="mt-4 space-y-1">
            <div className="font-bold">DATUM</div>
            <div>11. MÄRZ 2024</div>
          </div>

          <div className="mt-8 space-y-1 pr-5 flex justify-between">
            <div className="">
              <div className="font-bold">ANGEBOTSNR</div>
              <div>A10x</div>
            </div>
            <div>
              <div className="font-bold">GÜLTIG</div>
              <div>7 TAGE</div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-10 bg-[#EFEFEF] rounded-md -translate-y-24 font-[Trim]">
        <div className="-translate-y-7 flex flex-col">
          <h1 className="text-5xl font-extrabold text-black leading-none">
            SONDER
            <br />
            ANGEBOT
          </h1>
          <div className="bg-black text-white font-bold text-sm px-6 py-1.5 w-52 text-center mt-2 rounded-full">
            Individuell
          </div>

          <div className="pt-5 text-sm">
            <div className="font-bold">Gen-AI Content Erstellung:</div>
            <div className="text-[#5a61ed] font-bold">10 Bilder</div>
            <div>Format: jeweils 1 Format, digital</div>
          </div>

          <div className="pt-5 text-sm">
            <div className="font-bold">Ablauf und benötigte Materialien:</div>
            <div>Source Images</div>
            <div>
              (Optimal: Freisteller in verschiedenen Perspektiven: Overview
              Front, Side, Half-Profile, Back)
            </div>
            <div>Materialien / Texturen: hochaufgelöste Bilder.</div>
            <div>Kick-Off Briefinggespräch: mit „Must-Haves“ und „No-Gos“.</div>
            <div>
              Feedbackrunde: Nach ersten Entwürfen (ca. 20%) inkl. Korrektur.
            </div>
            <div>Anschließend werden die Bilder finalisiert.</div>
          </div>

          <div className="flex flex-row justify-between pt-5">
            {/* 1st col */}
            <div className="text-sm w-1/2">
              <div className="font-bold">Express Lieferzeit:</div>
              <div>
                Vsl. innerhalb 14 Tage nach Feedbackrunde. Projektstart erfolgt
                nach Eingang der Zahlung.
              </div>

              <div className="pt-5">
                <div className="font-bold">Zahlung:</div>
                <div>Vorauskasse</div>
              </div>
            </div>
            {/* 2nd col */}
            <div className="text-sm w-1/2">
              <div className="font-bold">Nutzungsrechte:</div>
              <div className="">
                Bruno Interior GmbH erhält die dauerhafte, weltweite, exklusive
                kommerzielle Nutzungslizenz. Weiterverkauf, Unterlizenzierung
                oder Weitergabe an Dritte ausgeschlossen. Es fallen keine
                zusätzlichen Lizenzgebühren an.
              </div>
            </div>
          </div>

          {/*  */}
          <div className="pt-5 text-sm">
            <div className="font-bold">Besondere Konditionen:</div>
            <div>
              Keine Mindestlaufzeit / Keine Onboarding-Gebühr: Flexibler Test
            </div>
          </div>
          {/*  */}
          <div className="py-10 w-[15%]">
            <hr className="font-extrabold" />
          </div>
          {/*  */}
          <div className="text-sm">
            <div className="font-bold">Sonderangebot*, Netto</div>
            <div>€ 4.000</div>
          </div>
          {/*  */}

          <div className="pt-5 text-xs">
            <p>
              *Sonderpreis bei der Bedingung, Bruno Interior GmbH und die Bilder
              als Referenzen nutzen zu dürfen.
            </p>
          </div>
        </div>
        {/* award 18  */}
        <div className="p-4 flex justify-end">
          <Image
            className="h-14 w-28"
            src={"/18logo.png"}
            alt=""
            width={1000}
            height={1000}
          />
        </div>
      </div>
      {/* footer */}
      <div className="p-2 flex justify-between -translate-y-28 font-[Trim]">
        <div className="flex gap-1 text-xs">
          <p className="font-bold">KONTAKT</p>
          <p>/ hallo@studioanton.de</p>
        </div>
        <div className="flex gap-1 text-xs">
          <p className="font-bold">UST-ID</p>
          <p>/ DE274673119</p>
        </div>
        <div className="flex gap-1 text-xs">
          <p className="font-bold">WWW</p>
          <p>/ studioanton.de</p>
        </div>
      </div>
    </div>
  );
};

export default OfferPreview;
