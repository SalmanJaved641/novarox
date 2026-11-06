"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "./Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";

const Header: React.FC = () => {
  const pathUrl = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  const path = usePathname();

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500 ${
        sticky ? "top-4" : "top-6"
      }`}
    >
      <div
        className={`glass-card flex items-center justify-between px-8 py-4 transition-all duration-500 ${
          sticky ? "bg-darkmode/80" : "bg-darkmode/40"
        }`}
      >
        <Logo />
        <nav className="hidden lg:flex items-center justify-center gap-12">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="hidden sm:inline-block px-8 py-3 bg-primary text-darkmode rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(255,90,31,0.35)] transition-all"
          >
            Let's Talk
          </Link>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block lg:hidden p-2 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
          </button>
        </div>
      </div>
      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-darkmode/95 z-40" />
      )}

      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode dark:bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-lg font-bold text-white">Menu</h2>
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-start p-6 gap-2">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
          <div className="mt-6 flex flex-col gap-4 w-full">
            <Link
              href="/contact"
              className="bg-primary text-darkmode px-6 py-3 rounded-full font-bold hover:scale-105 hover:bg-primary-hover transition-all"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
