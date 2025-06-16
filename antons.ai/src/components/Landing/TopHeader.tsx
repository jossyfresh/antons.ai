import Link from 'next/link'
import React from 'react'

export default function TopHeader() {
  return (
    <div className='h-[40px] flex items-center px-24'>
      <div className="flex-1" />
       <span
        className='text-center font-[Trim] font-light'
        style={{
          fontSize: '12px',
          lineHeight: '34px',
          letterSpacing: '0px',
          color: '#000000',
          opacity: 1,
        }}
      >
        AI-First Design Obsessed
      </span>
      <div className="flex-1 flex justify-end gap-5">
        <Link
        href={"/login"}
       className='text-left font-[Trim] font-bold'
          style={{
            fontSize: '12px',
            lineHeight: '29px',
            letterSpacing: '0px',
            color: '#000000',
            opacity: 1,
          }}
        >
          Login</Link>
        <Link
        href={"/register"}
          className='text-right font-[Trim] font-bold'
          style={{
            fontSize: '12px',
            lineHeight: '29px',
            letterSpacing: '0px',
            color: '#5A61ED',
            opacity: 1,
          }}
        >Don&apos;t Wait</Link>
      </div>
    </div>
  )
}
