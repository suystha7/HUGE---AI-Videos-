"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(linksRef.current, {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      delay: 0.5,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full h-16 z-50 px-8 py-4 bg-black/80 backdrop-blur-lg flex justify-between items-center border-b border-white/10"
    >
      <h1 className="text-2xl font-extrabold tracking-tight text-white">
        <span className="text-[#b06c41]">Huge</span> AI Videos
      </h1>
      <div className="space-x-8 text-lg uppercase tracking-wider font-medium">
        {["About", "Features"].map((label, i) => (
          <a
            key={label}
            ref={(el) => (linksRef.current[i] = el)}
            href={`#${label.toLowerCase()}`}
            className="relative group text-[#b06c41]"
          >
            {label}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </nav>
  );
}