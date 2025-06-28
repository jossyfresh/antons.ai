"use client";
import Image from "next/image";
import React from "react";

const shoeImages = [
  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c38fdd2-9c26-4a84-b54c-02933f53847d/PHANTOM+GX+II+CLUB+IC.png",
  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bdb0da1c-2137-446f-8cc4-80881749fdc2/NIKE+AIR+MAX+SC.png",
  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/efd0be88-1a44-4683-826a-ad28138515c4/G.T.+HUSTLE+ACADEMY.png",
  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5335cd61-7bee-4e12-99a9-48df5a764442/AIR+ZOOM+G.T.+CUT+ACADEMY.png",
  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bdb0da1c-2137-446f-8cc4-80881749fdc2/NIKE+AIR+MAX+SC.png",
  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/efd0be88-1a44-4683-826a-ad28138515c4/G.T.+HUSTLE+ACADEMY.png",
  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5335cd61-7bee-4e12-99a9-48df5a764442/AIR+ZOOM+G.T.+CUT+ACADEMY.png",
  "",
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center">
      

      {/* Main content container */}
      <div className="w-full max-w-5xl mt-8">
        {/* Tabs */}
        <div className="flex gap-3 mb-8">
          <button className="bg-black text-white rounded-full px-4 py-1 font-[Trim] text-sm font-bold">Collection</button>
          <button className="bg-[#EFEFEF] text-black rounded-full px-4 py-1 font-[Trim] text-sm">Briefing</button>
          <button className="bg-[#EFEFEF] text-black rounded-full px-4 py-1 font-[Trim] text-sm">Rechnungen</button>
        </div>

        <div className="flex items-center">
        {/* GOAT Title */}
        <div className="mb-2 font-[Trim] text-2xl tracking-[0.2em]">GOAT</div>

        {/* Search */}
        <div className="flex-1 flex justify-center mb-4">
          <input
            type="text"
            placeholder="TYPE TO SEARCH"
            className="w-64 px-4 py-2 rounded-full border border-[#c5c5c5] bg-[#FAFAFA] text-sm font-[Trim] text-center placeholder:text-[#A8A8A8] outline-none"
          />
        </div>
        </div>

        {/* Main image and label */}
        <div className="border border-[#c5c5c5] bg-white mb-8">
             {/* NIKE part*/}
            <div className="p-20 flex items-center gap-20">
                <div className="w-64 h-64 bg-[#E5E5E5] rounded-md flex items-center justify-center mb-6">
                    {/* Placeholder for image */}
                    <span className="text-[#A8A8A8] font-[Trim]">Image</span>
                </div>
                <div className="text-4xl font-[Trim] tracking-widest text-black">NIKE</div>
            </div>
            {/* Filters Part */}
            <div className="grid grid-cols-4">
                <select className="w-full px-4 py-2 border border-[#c5c5c5] bg-white font-[Trim] text-sm">
                    <option>CATEGORY</option>
                </select>
                <select className="w-full px-4 py-2 border border-[#c5c5c5] bg-white font-[Trim] text-sm">
                    <option>SIZE</option>
                </select>
                <select className="w-full px-4 py-2 border border-[#c5c5c5] bg-white font-[Trim] text-sm">
                    <option>COLOR</option>
                </select>
                <select className="w-full px-4 py-2 border border-[#c5c5c5] bg-white font-[Trim] text-sm">
                    <option>PRICE</option>
                </select>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-4">
              {shoeImages.map((img, idx) => (
                <div key={idx} className="h-62 border border-[#c5c5c5] relative flex items-center justify-center">
                  {idx === 0 && (
                    <button className="bg-[#A48BFF] text-white rounded-full px-6 h-7 font-[Trim] text-sm font-bold absolute top-[5%] right-[5%]">New</button>
                  )}
                  {idx === 1 && (
                    <button className="bg-[#A48BFF] text-white rounded-full px-6 h-7 font-[Trim] text-sm font-bold absolute top-[5%] right-[5%]">Completed</button>
                  )}
                  {idx === 2 && (
                    <button className="bg-[#A48BFF] text-white rounded-full px-6 h-7 font-[Trim] text-sm font-bold absolute top-[5%] right-[5%]">Final</button>
                  )}
                  {img ? (
                    <Image src={img} alt="Nike Shoe"
                      height={1000}
                      width={1000}
                    className="object-fit h-full w-full" />
                  ) : null}
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}