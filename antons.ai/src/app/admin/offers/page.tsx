"use client";
import React, { useState } from "react";


const OFFER_OPTIONS = ["Standard", "Mikro", "Priority Express", "Individual"];

function OfferSegmentedControl({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex gap-4 justify-start">
      {OFFER_OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`px-6 py-1 rounded-full font-[Trim] transition text-sm
            ${value === option
              ? "bg-white font-bold text-black shadow"
              : "bg-transparent font-normal text-black"
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default function AdminOffersPage() {
    
    const [checked, setChecked] = useState(false);
    const [selectedOffer, setSelectedOffer] = React.useState("Standard");
    const [sliderValue, setSliderValue] = React.useState(10);
    const [minsliderValue,minsetSliderValue] = React.useState(2);

  return (
    <div className="min-h-screen bg-[#EFEFEF] flex flex-col">
        {/* GOAT part */}
       <div className="w-full bg-black text-white py-2 px-8 flex justify-between items-center">
        <div className="flex-1"/>
        <span className="font-[Trim] text-lg font-normal tracking-wide">GOT BAG <span className="font-bold">Dashboard</span></span>
        <button className="flex-1 flex px-10 font-[Trim] text-sm font-bold justify-end">Logout</button>
      </div>

    <div className="flex ">
      <div className="w-4/5 ">
            <div className="flex justify-center gap-40 p-10">
                <div>
                    <p className="font-[Trim] text-lg font-bold">Rechnungen</p>
                </div>
                <div className="flex gap-4">
                    <p className="font-[Trim] text-lg font-bold">Angebot</p>
                    <OfferToggle checked={checked} onChange={() => setChecked(v => !v)} />
                </div>
            </div>
      {/* individual filter */}
    <div className="px-18 flex flex-col gap-10  w-full">
        <div className="flex items-center gap-18">
          <div className="w-1/5 flex gap-6 items-center">
              <CircleToggle checked={checked} onChange={() => setChecked(v => !v)} color = {false}/>
              <p className="font-[Trim] font-normal ">Paket</p>
          </div>
          <div className="w-4/5">
            <OfferSegmentedControl value={selectedOffer} onChange={setSelectedOffer} />
          </div>           
        </div>
        <div className="flex items-center gap-18">
           <div className="w-1/5 flex gap-6 items-center">
                <CircleToggle checked={checked} onChange={() => setChecked(v => !v)} color = {false}/>
                <p className="font-[Trim] font-normal ">Bildanzahl</p>
            </div>
             <div className="w-4/5">
              <OfferSlider min={1} max={30} value={sliderValue} onChange={setSliderValue} labelBold />
            </div>
        </div>
        <div className="flex items-center gap-18">
            <div className="w-1/5 flex gap-6 items-center">
                <CircleToggle checked={checked} onChange={() => setChecked(v => !v)} color = {false}/>
                <div className="">
                    <p className="font-[Trim] font-normal">Umsetzung</p>
                    <p className="font-[Trim] font-normal">Realprodukt</p>
                </div>
            </div>
            <div className="w-4/5">
              <OfferSlider min={1} max={30} value={sliderValue} onChange={setSliderValue} labelBold />
            </div>
        </div>
        {/* <div className="flex gap-10"> */}
            <div className="flex items-center gap-18">
                 <div className="w-1/5 flex gap-6 items-center">
                    <CircleToggle checked={checked} onChange={() => setChecked(v => !v)} color = {false}/>
                    <div>
                        <p className="font-[Trim] font-normal">Komplexität</p>
                        <p className="font-[Trim] font-normal">Charaktäre</p>
                    </div>
                </div>
                <div className="w-4/5 flex items-center gap-14">
                  <div className="w-1/3">
                    <OfferSlider min={1} max={3} value={minsliderValue} onChange={minsetSliderValue} labelBold />
                  </div>
                  <div className="flex gap-4 items-center  1/3">
                      <CircleToggle checked={checked} onChange={() => setChecked(v => !v)} color = {false}/>
                      <div>
                          <p className="font-[Trim] font-normal">Komplexität</p>
                          <p className="font-[Trim] font-normal">Scene</p>
                      </div>
                  </div>
                  <div className="w-1/3">
                    <OfferSlider min={1} max={3} value={minsliderValue} onChange={minsetSliderValue} labelBold />
                  </div>
                </div>
            </div>

            <div className="flex items-center gap-18">
                <div className="w-1/5 flex gap-6 items-center">
                    <CircleToggle checked={checked} onChange={() => setChecked(v => !v)} color = {false} />
                    <p className="font-[Trim] font-normal">Konzept</p>
                </div>
                <div className="w-4/5 flex gap-10 mr-5">
                  <div className="flex gap-4 items-center">
                      <CircleToggle checked={true} onChange={() => setChecked(v => !v)} color = {true}/>
                      <p className="font-[Trim] font-normal px-2.5">Briefing vorhanden.</p>
                  </div>
                  <div className="flex gap-4 items-center">
                      <CircleToggle checked={true} onChange={() => setChecked(v => !v)} color = {false}/>
                      <p className="font-[Trim] font-normal px-2.5">Art Direction</p>
                      <button
                      type="button"
                      className="px-5 py-1 rounded-full bg-white shadow font-[Trim] font-bold text-black text-sm"
                      >
                      x&nbsp;€
                      </button>
                  </div>
                </div>
            </div>
            <div className="flex items-center gap-18">
                <div className="w-1/5 flex gap-6 items-center">
                    <CircleToggle checked={checked} onChange={() => setChecked(v => !v)} color = {false}/>
                    <div>
                        <p className="font-[Trim] font-normal">Auflösung/</p>
                        <p className="font-[Trim] font-normal">Format</p>
                    </div>
                </div>
                <div className="w-4/5 flex gap-10 mr-5 items-center">
                  <div className="flex flex-col">
                      <CircleToggle checked={true} onChange={() => setChecked(v => !v)} color = {true}/>
                      <p className="font-[Trim] font-normal text-center">HD</p>
                  </div>
                  <OfferSliderMin min={1} max={10} value={sliderValue} onChange={setSliderValue} labelBold />
                </div>
            </div>
            <div className="flex items-center gap-18">
                 <div className="w-1/5 flex gap-6 items-center">
                    <CircleToggle checked={checked} onChange={() => setChecked(v => !v)} color = {false}/>
                    <p className="font-[Trim] font-normal">Sonderformate</p>
                </div>
                <div className="w-4/5 flex gap-10 mr-5 items-center">
                  <div className="flex flex-col">
                      <CircleToggle checked={true} onChange={() => setChecked(v => !v)} color = {false}/>
                      <p className="font-[Trim] font-normal text-center">Print</p>
                  </div>
                  <OfferSliderMin min={1} max={10} value={sliderValue} onChange={setSliderValue} labelBold />
                   <div className="mb-6 flex gap-4 items-center">
                    <button
                        type="button"
                        className="px-5 py-1 rounded-full bg-white shadow font-[Trim] font-bold text-black text-sm"
                        >
                        Xmm x Xmm
                    </button>
                    <button className="w-6 h-6 rounded-full flex items-center justify-center bg-white">+</button>
                  </div>
                </div>       
            </div>
            <div className="flex items-center gap-18">
                 <div className="w-1/5 flex gap-6 items-center">
                    <CircleToggle checked={checked} onChange={() => setChecked(v => !v)} color = {false}/>
                    <p className="font-[Trim] font-normal">Übergröße &gt; A3</p>
                </div>
                <div className="w-4/5 flex gap-10 mr-5 items-center">
                  <div className="flex flex-col">
                      <CircleToggle checked={true} onChange={() => setChecked(v => !v)} color = {false}/>
                      <p className="font-[Trim] font-normal text-center">Print</p>
                  </div>
                  <OfferSliderMin min={1} max={10} value={sliderValue} onChange={setSliderValue} labelBold />
                   <div className="mb-6 flex gap-4 items-center">
                    <button
                        type="button"
                        className="px-5 py-1 rounded-full bg-white shadow font-[Trim] font-bold text-black text-sm"
                        >
                        Xmm x Xmm
                    </button>
                    <button className="w-6 h-6 rounded-full flex items-center justify-center bg-white">+</button>
                  </div>
              </div>           
            </div>

            <div className="flex items-center gap-18">
                 <div className="w-1/5 flex gap-6 items-center">
                    <CircleToggle checked={checked} onChange={() => setChecked(v => !v)} color = {false}/>
                    <p className="font-[Trim] font-normal">Abstimmung</p>
                </div>
                <div className="w-4/5 flex gap-10 mr-5 items-center">
                  <div className="flex flex-row gap-5 items-center">
                      <CircleToggle checked={true} onChange={() => setChecked(v => !v)} color = {true}/>
                      <p className="font-[Trim] font-normal text-center">Standard (1 Abstimmung, 1 Korrektur)</p>
                  </div>
                </div>         
            </div>

            <div className="flex items-center gap-18">
                 <div className="w-1/5 flex gap-6 items-center">
                    <CircleToggle checked={checked} onChange={() => setChecked(v => !v)} color = {false} />
                    <p className="font-[Trim] font-normal">Lieferzeit, ca.</p>
                </div>
                <div className="w-3/5 flex mr-5 items-center">
                  <OfferSlider min={3} max={21} value={sliderValue} onChange={setSliderValue} labelBold />
                </div> 
                <div className="w-1/9">
                </div>        
            </div>

            <div className="flex items-center gap-18">
                 <div className="w-1/5 flex gap-6 items-center">
                    <CircleToggle checked={checked} onChange={() => setChecked(v => !v)} color = {false}/>
                    <p className="font-[Trim] font-normal">Nutzung</p>
                </div>
                <div className="w-4/5 flex gap-10 mr-5 items-center">
                  <div className="flex flex-row gap-5 items-center">
                      <CircleToggle checked={true} onChange={() => setChecked(v => !v)} color = {true} />
                      <p className="font-[Trim] font-normal text-center">Volle, kommerzielle Nutzung.</p>
                  </div>
                </div>         
            </div>

            <div className="flex items-center gap-18">
                 <div className="w-1/5 flex gap-6 items-center">
                    <CircleToggle checked={checked} onChange={() => setChecked(v => !v)} color = {false}/>
                    <p className="font-[Trim] font-normal">Rabatt</p>
                </div>
                <div className="w-4/5 flex gap-14 mr-5 items-center">
                  <div className="flex flex-row gap-5 items-center">
                      <CircleToggle checked={true} onChange={() => setChecked(v => !v)} color = {true}/>
                      <p className="font-[Trim] font-normal text-center">10% Frühbucherrabatt</p>
                  </div>
                  <div className="flex flex-row gap-5 items-center">
                      <CircleToggle checked={true} onChange={() => setChecked(v => !v)} color = {false} />
                      <p className="font-[Trim] font-normal text-center">10% Studio Anton Credits bei Veröffentlichung</p>
                  </div>
                </div>         
            </div>

            <div className="flex items-center gap-18 mb-10">
                 <div className="w-1/5 flex gap-6 items-center">
                    <CircleToggle checked={checked} onChange={() => setChecked(v => !v)} color = {false} />
                    <p className="font-[Trim] font-normal">Zahlung</p>
                </div>
                <div className="w-4/5 flex gap-14 mr-5 items-center">
                  <div className="flex flex-row gap-5 items-center">
                      <CircleToggle checked={true} onChange={() => setChecked(v => !v)} color = {true}/>
                      <p className="font-[Trim] font-normal text-center">Vorauskasse</p>
                  </div>
                  
                </div>         
            </div>
        {/* </div> */}
        {/* end */}
    </div>
 </div>
      <div className="w-1/5  mt-24 mr-10 flex justify-center items-start">
        <div className="bg-white rounded-2xl shadow p-6 mt-2 w-full max-w-[400px] min-h-[300px] flex flex-col">
          <div className="font-[Trim] font-bold text-base mb-3">Contact</div>
          <div className="font-[Trim] text-base mb-5">
            Fabian XXX<br />
            Mail:<br />
            Mobile:
          </div>
          <div className="font-[Trim] font-bold text-base mb-1">Rechnungsadresse:</div>
          <div className="font-[Trim] text-base">
            Ritter Sport GmbH<br />
            Adress 1<br />
            60594 City
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}


function OfferToggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`w-13 h-8 rounded-full flex items-center px-2 transition-colors duration-200 ${
        checked ? "bg-[#00FFD0]" : "bg-[#BDBDBD]"
      }`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full flex items-center justify-center shadow transition-transform duration-200 ${
          checked ? "translate-x-4" : ""
        }`}
      >
        {checked ? (
          // Checkmark
          <svg width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <path d="M7 13l3 3 6-6" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        ) : (
          // X
          <svg width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <path d="M8 8l8 8M16 8l-8 8" stroke="#707070" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </div>
    </button>
  );
}

function CircleToggle({ checked, onChange, color }: { checked: boolean; onChange: () => void;color:boolean }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200
        ${checked ? color ? "bg-[#3DFFAB]" : "bg-white" : "bg-[#BDBDBD]"}`}
      style={{ boxShadow: checked ? "0 2px 8px 0 #0001" : undefined }}
    >
      {checked ? (
        // Checkmark
        <svg width="28" height="28" viewBox="0 0 28 28">
          <path d="M8 15l4 4 8-8" stroke="#222" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      ) : (
        // X
        <svg width="28" height="28" viewBox="0 0 28 28">
          <path d="M9 9l10 10M19 9l-10 10" stroke="#707070" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}

function OfferSlider({
  min,
  max,
  value,
  onChange,
  labelBold = false,
  rightLabel = "",
  showX = false,
}: {
  min: number;
  max: number;
  value: number;
  onChange: (v: number) => void;
  labelBold?: boolean;
  label?: string;
  rightLabel?: string;
  showX?: boolean;
}) {
  return (
    <div className="w-full flex flex-col gap-1 ">
      <div className="relative w-full flex items-center">
        {/* Slider track */}
        <div className="absolute left-0 right-0 h-2 rounded-full bg-[#BDBDBD]" />
        <div
          className="absolute left-0 h-2 rounded-full bg-white"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
        {/* Slider input */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="w-full appearance-none bg-transparent z-10"
          style={{ height: 8 }}
        />
        {/* Custom thumb */}
        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 24px;
            height: 24px;
            border-radius: 9999px;
            background: #fff;
            box-shadow: 0 2px 8px #0001;
            cursor: pointer;
            margin-top: -8px;
          }
          input[type="range"]:focus::-webkit-slider-thumb {
            outline: none;
            border-color: #222;
          }
          input[type="range"]::-moz-range-thumb {
            width: 24px;
            height: 24px;
            border-radius: 9999px;
            background: #fff;
            border: 2px solid #BDBDBD;
            box-shadow: 0 2px 8px #0001;
            cursor: pointer;
          }
          input[type="range"]::-ms-thumb {
            width: 24px;
            height: 24px;
            border-radius: 9999px;
            background: #fff;
            border: 2px solid #BDBDBD;
            box-shadow: 0 2px 8px #0001;
            cursor: pointer;
          }
          input[type="range"]::-webkit-slider-runnable-track {
            height: 8px;
            background: transparent;
          }
          input[type="range"]:focus {
            outline: none;
          }
        `}</style>
      </div>
      {/* Labels */}
      <div className="flex justify-between items-center mt-1">
        <span className="text-sm font-[Trim]">{min}</span>
        <span className={`text-base font-[Trim] ${labelBold ? "font-bold" : ""}`}>{value}</span>
        <span className="text-sm font-[Trim]">{max}</span>
        {showX && (
          <span className="ml-4 text-base font-[Trim] font-bold">x</span>
        )}
        {rightLabel && (
          <span className="ml-2 text-sm font-[Trim]">{rightLabel}</span>
        )}
      </div>
    </div>
  );
}

function OfferSliderMin({
  min,
  max,
  value,
  onChange,
  labelBold = false,
  rightLabel = "",
  showX = false,
}: {
  min: number;
  max: number;
  value: number;
  onChange: (v: number) => void;
  labelBold?: boolean;
  label?: string;
  rightLabel?: string;
  showX?: boolean;
}) {
  return (
    <div className="w-1/3 flex flex-col gap-1">
      <div className="relative w-full flex items-center">
        {/* Slider track */}
        <div className="absolute left-0 right-0 h-2 rounded-full bg-[#BDBDBD]" />
        <div
          className="absolute left-0 h-2 rounded-full bg-white"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
        {/* Slider input */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="w-full appearance-none bg-transparent z-10"
          style={{ height: 8 }}
        />
        {/* Custom thumb */}
        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 24px;
            height: 24px;
            border-radius: 9999px;
            background: #fff;
            box-shadow: 0 2px 8px #0001;
            cursor: pointer;
            margin-top: -8px;
          }
          input[type="range"]:focus::-webkit-slider-thumb {
            outline: none;
            border-color: #222;
          }
          input[type="range"]::-moz-range-thumb {
            width: 24px;
            height: 24px;
            border-radius: 9999px;
            background: #fff;
            border: 2px solid #BDBDBD;
            box-shadow: 0 2px 8px #0001;
            cursor: pointer;
          }
          input[type="range"]::-ms-thumb {
            width: 24px;
            height: 24px;
            border-radius: 9999px;
            background: #fff;
            border: 2px solid #BDBDBD;
            box-shadow: 0 2px 8px #0001;
            cursor: pointer;
          }
          input[type="range"]::-webkit-slider-runnable-track {
            height: 8px;
            background: transparent;
          }
          input[type="range"]:focus {
            outline: none;
          }
        `}</style>
      </div>
      {/* Labels */}
      <div className="flex justify-between items-center mt-1">
        <span className="text-sm font-[Trim]">{min}</span>
        <span className={`text-base font-[Trim] ${labelBold ? "font-bold" : ""}`}>{value}</span>
        <span className="text-sm font-[Trim]">{max}</span>
        {showX && (
          <span className="ml-4 text-base font-[Trim] font-bold">x</span>
        )}
        {rightLabel && (
          <span className="ml-2 text-sm font-[Trim]">{rightLabel}</span>
        )}
      </div>
    </div>
  );
}
