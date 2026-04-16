"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineHome, HiOutlineChartBar, HiOutlineClock, HiMenuAlt3, HiX } from "react-icons/hi";
import { RiUserHeartLine } from "react-icons/ri";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: HiOutlineHome },
    { name: "Timeline", href: "/timeline", icon: HiOutlineClock },
    { name: "Stats", href: "/stats", icon: HiOutlineChartBar },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6">
        
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2d4a3e] text-white transition-transform group-hover:rotate-12">
            <RiUserHeartLine size={24} />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-800">
            Keen<span className="text-[#2d4a3e]">Keeper</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 sm:gap-3 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={twMerge(
                  clsx(
                    "flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 text-[15px] font-semibold",
                    isActive
                      ? "bg-[#2d4a3e] text-white shadow-lg shadow-emerald-900/20 scale-105"
                      : "text-slate-500 hover:text-[#2d4a3e] hover:bg-white"
                  )
                )}
              >
                <Icon size={20} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all"
        >
          {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      <div className={twMerge(
        "md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 transition-all duration-300 ease-in-out overflow-hidden shadow-xl",
        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="p-4 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={twMerge(
                  clsx(
                    "flex items-center gap-4 px-5 py-4 rounded-xl text-base font-bold transition-all",
                    isActive
                      ? "bg-[#2d4a3e] text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  )
                )}
              >
                <Icon size={22} />
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;