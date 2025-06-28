"use client";
import React from "react";

export default function BriefingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col px-52">
      {/* Tabs */}
      <div className="flex gap-3 mt-8 mb-12 justify-start">
        <button className="bg-[#EFEFEF] text-black rounded-full px-4 py-1 font-[Trim] text-sm">Collection</button>
        <button className="bg-black text-white rounded-full px-4 py-1 font-[Trim] text-sm font-bold">Briefing</button>
        <button className="bg-[#EFEFEF] text-black rounded-full px-4 py-1 font-[Trim] text-sm">Rechnungen</button>
      </div>

      {/* Main content */}
      <div className="flex justify-between gap-16 w-full">
        {/* Briefing box */}
        <div className="w-[300px] h-[250px] bg-[#EFEFEF] rounded-md p-4 font-[Trim] text-sm">
          Briefing..
        </div>
        <div className="self-center">
          <span className="font-[Trim] font-bold text-lg mb-4">Order</span>
        </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="w-[300px] h-14 bg-[#EFEFEF] rounded-full flex items-center px-6 font-[Trim] text-sm">Bild 1</div>
            <div className="w-[300px] h-14 bg-[#EFEFEF] rounded-full flex items-center px-6 font-[Trim] text-sm">Bild 2</div>
            <div className="w-[300px] h-14 bg-[#EFEFEF] rounded-full flex items-center px-6 font-[Trim] text-sm">Bild 3</div>
            <button className="mt-6 w-8 h-8 rounded-full bg-[#EFEFEF] flex items-center justify-center text-2xl font-bold">
              +
            </button>
          </div>
      </div>

      {/* Status bar */}
      <div className="fixed bottom-0 left-0 w-full bg-[#F5F5F5] py-6 flex justify-center gap-40">
        <button className="bg-[#7B1FFF] text-white rounded-full px-8 py-2 font-[Trim] text-sm font-bold">New</button>
        <button className="bg-[#7B1FFF] text-white rounded-full px-8 py-2 font-[Trim] text-sm font-bold">Corrected 1</button>
        <button className="bg-[#7B1FFF] text-white rounded-full px-8 py-2 font-[Trim] text-sm font-bold">Final</button>
      </div>
    </div>
  );
}