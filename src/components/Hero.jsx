"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function Hero() {
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const badgeRef = useRef(null);
  const pulseRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    tl.from(
      subtextRef.current,
      {
        y: 40,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.5"
    );

    gsap.to(badgeRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    pulseRefs.current.forEach((circle, i) => {
      gsap.to(circle, {
        scale: 1.5,
        opacity: 0.3,
        duration: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.3,
      });
    });

    gsap.to(videoRef.current, {
      scale: 1.05,
      opacity: 0.85,
      duration: 6,
      ease: "elastic.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(overlayRef.current, {
      opacity: 0.5,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1,
    });
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden mt-14">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover aspect-video"
        src="/assets/66657_sd.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none"
      ></div>

      <div
        ref={badgeRef}
        className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md font-bold tracking-wide uppercase"
      >
        🚀 AI Powered
      </div>

      {[
        { top: "20%", left: "10%" },
        { top: "30%", right: "15%" },
        { bottom: "25%", left: "20%" },
      ].map((style, i) => (
        <div
          key={i}
          ref={(el) => (pulseRefs.current[i] = el)}
          className="absolute w-4 h-4 bg-blue-500 rounded-full opacity-40 blur-sm"
          style={style}
        />
      ))}

      <h1
        ref={headingRef}
        className="relative z-10 text-6xl md:text-8xl font-bold text-[#fe7200] drop-shadow-lg"
      >
        Discover AI Videos Magic
      </h1>
      <p
        ref={subtextRef}
        className="relative z-10 mt-6 text-xl text-gray-200 max-w-2xl drop-shadow-md"
      >
        Watch & Share curated AI-generated videos with auto summaries,
        transcripts & insights.
      </p>
    </section>
  );
}
