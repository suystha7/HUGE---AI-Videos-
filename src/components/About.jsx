"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);


  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", 
      }}
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-50"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-2xl text-center text-white">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
        >
          About Us
        </h2>
        <p
          ref={textRef}
          className="text-lg leading-relaxed tracking-wide drop-shadow-md"
        >
          We create immersive AI video experiences powered by GSAP animations,
          Next.js routing, and intelligent video summaries. Engage your audience
          through storytelling and motion.
        </p>
      </div>
    </section>
  );
}
