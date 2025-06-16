import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='mt-96 p-20 '>
      <div className='h-[245px] rounded-4xl bg-black flex'>
        <div className='flex items-center h-full w-1/3' >
            <div className='p-10'>
                <span className='text-white font-[Trim] font-light text-3xl'>Designers who geek out. Not Geeks who design.</span>
            </div>
        </div>
        <div className='flex justify-end items-end gap-8 py-4 px-14 w-2/3'>
            <Link
                href="#"
                className="text-white font-[Trim] font-light text-[15px] leading-[40px] text-center"
                style={{
                letterSpacing: "0px",
                opacity: 1,
                fontWeight: 300,
                }}
            >
                KONTAKT
            </Link>
            <Link
                href="#"
                className="text-[#A8A8A8] font-[Trim] font-light text-[15px] leading-[40px] text-center"
                style={{
                letterSpacing: "0px",
                opacity: 1,
                fontWeight: 300,
                }}
            >
                IMPRESSUM
            </Link>
            <Link
                href="#"
                className="text-[#A8A8A8] font-[Trim] font-light text-[15px] leading-[40px] text-center"
                style={{
                letterSpacing: "0px",
                opacity: 1,
                fontWeight: 300,
                }}
            >
                DATENSCHUTZ
            </Link>
            <Link
                href="#"
                className="text-white font-[Trim] font-light text-[15px] leading-[40px] text-center"
                style={{
                letterSpacing: "0px",
                opacity: 1,
                fontWeight: 300,
                }}
            >
                LEGAL
            </Link>    
        </div>

      </div>
    </div>
  )
}
