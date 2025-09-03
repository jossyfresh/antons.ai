"use client";

import React, { useEffect, useState } from "react";
import OfferPreview from "../../../../components/OfferPreview";

export default function OfferPreviewPage() {
  const [offer, setOffer] = useState<any>(null);

  useEffect(() => {
    const offerData = window.localStorage.getItem("offerPreview");
    if (offerData) setOffer(JSON.parse(offerData));
  }, []);

  return (
    <div className="min-h-screen bg-[#EFEFEF] flex flex-col items-center justify-center">
      {offer ? (
        <OfferPreview />
      ) : (
        <div className="text-gray-500">No offer data found.</div>
      )}
      <button
        className="mt-8 px-6 py-2 bg-black text-white rounded font-[Trim] font-bold"
        onClick={() => window.history.back()}>
        Back to Edit
      </button>
    </div>
  );
}
