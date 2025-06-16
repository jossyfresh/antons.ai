import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex items-center px-24 py-3 justify-between">
    <div className="flex-1 flex">
        <Image src="/anton.svg" alt="Anton Logo"  width={84}
        height={16}
        style={{
            background: "transparent",
            opacity: 1,
        }}
        priority />
    </div>
    <div className="flex-1 flex gap-8 px-28">
        <Link
        href="gen-ai"
        className="font-[Trim] font-bold"
        style={{
            fontSize: "16px",
            lineHeight: "29px",
            letterSpacing: "0px",
            color: "#303030",
            opacity: 1,
            textDecoration: "none",
        }}
        >
        Gen-AI Studio
        </Link>
        <Link
        href="avatare"
        className="font-[Trim] font-bold"
        style={{
            fontSize: "16px",
            lineHeight: "29px",
            letterSpacing: "0px",
            color: "#A8A8A8",
            opacity: 1,
            textDecoration: "none",
        }}
        >
        Avatare
        </Link>
        <Link
        href="automation"
        className="font-[Trim] font-bold"
        style={{
            fontSize: "16px",
            lineHeight: "29px",
            letterSpacing: "0px",
            color: "#A8A8A8",
            opacity: 1,
            textDecoration: "none",
        }}
        >
        Automation
        </Link>
    </div>
    <div className="flex-1" />
    </div>
  )
}
