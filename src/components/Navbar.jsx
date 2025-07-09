"use client";

import { useRef, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["About", "Features"];

  useEffect(() => {
    if (isMobileMenuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%", autoAlpha: 0 },
        {
          x: "0%",
          autoAlpha: 1,
          duration: 0.5,
          ease: "power3.out",
          display: "flex",
        }
      );
    } else if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: "100%",
        autoAlpha: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full h-16 z-50 px-8 py-4 bg-black backdrop-blur-lg flex justify-between items-center border-b border-white/10"
    >
      {/* Logo */}
      <h1 className="text-2xl font-extrabold tracking-tight text-white">
        <span className="text-[#b06c41]">Huge</span> AI Videos
      </h1>

      {/* Menu Toggle Button */}
      <button
        className="text-[#b06c41] focus:outline-none z-50"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-screen w-64 bg-black backdrop-blur-lg border-l border-white/10 flex-col items-start px-6 py-16 space-y-6 z-40 text-[#b06c41] font-medium text-lg hidden"
      >
        {navItems.map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            onClick={() => setMobileMenuOpen(false)}
            className="uppercase tracking-wider hover:text-pink-500 transition"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
