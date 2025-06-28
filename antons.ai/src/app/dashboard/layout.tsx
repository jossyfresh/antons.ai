import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="w-full bg-black text-white py-2 px-8 flex justify-between items-center">
        <div className="flex-1" />
        <span className="font-[Trim] text-xl font-normal tracking-wider">
          GOT BAG <span className="font-bold">Dashboard</span>
        </span>
        <button className="flex-1 flex px-10 font-[Trim] text-sm font-bold justify-end">
          Logout
        </button>
      </div>
      {children}
    </div>
  );
}