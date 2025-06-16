import React from 'react'

export default function Hero() {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-top bg-transparent relative"
      style={{
        backgroundImage: "url('/img-back.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "transparent",
      }}
    >
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center w-full px-4">
        <h1
          className="text-white text-5xl font-[500] mb-4 w-1/6 font-[Helvetica]"
        >
          WE MAKE IT HUMAN
        </h1>
        <p
          className="text-white text-[18px] w-1/4 leading-[20px] font-light mb-6 font-[Trim]"
          style={{
            letterSpacing: "0px",
            opacity: 1,
          }}
        >
          @Brand Leaders, every Brand will use AI. Smart Ones already do.
        </p>
        <button
          className="bg-black flex items-center justify-center text-white font-[Trim] font-bold px-8 py-2 rounded-[27px] text-lg shadow-md hover:bg-[#222] transition"
          style={{
            width: "102px",
            height: "40px",
            opacity: 1,
          }}
        >
          call
        </button>
      </div>
    </div>
  )
}
