"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useTypewriter } from "react-simple-typewriter";

gsap.registerPlugin(MotionPathPlugin);

const videoSources = [
  "/assets/80187_sd.mp4",
  "/assets/77600_sd.mp4",
  "/assets/80832_sd.mp4",
  "/assets/80730_sd.mp4",
];

export default function Hero() {
  const headingRef = useRef(null);
  const overlayRef = useRef(null);
  const badgeRef = useRef(null);
  const pulseRefs = useRef([]);
  const particlesRef = useRef([]);

  const [text] = useTypewriter({
    words: [
      "Watch & Share curated AI-generated videos",
      "Auto summaries, transcripts & insights",
      "Explore the magic of AI storytelling",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % videoSources.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    gsap.fromTo(
      badgeRef.current,
      {
        motionPath: {
          path: [
            { x: -100, y: -80 },
            { x: 0, y: 0 },
          ],
        },
        opacity: 0,
      },
      {
        motionPath: {
          path: [
            { x: -100, y: -80 },
            { x: 0, y: 0 },
          ],
        },
        duration: 2,
        ease: "power2.out",
        opacity: 1,
      }
    );

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

    gsap.to(overlayRef.current, {
      opacity: 0.5,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1,
    });

    particlesRef.current.forEach((el) => {
      gsap.to(el, {
        x: () => Math.random() * window.innerWidth,
        y: () => Math.random() * window.innerHeight,
        repeat: -1,
        duration: 10 + Math.random() * 10,
        ease: "none",
      });
    });
  }, []);


  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === activeVideo) {
        gsap.to(vid, {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          zIndex: 10,
        });
        vid.play();
      } else {
        gsap.to(vid, {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          zIndex: 1,
        });
        vid.pause();
        vid.currentTime = 0;
      }
    });
  }, [activeVideo]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden mt-20">
      {videoSources.map((src, i) => (
        <video
          key={i}
          ref={(el) => (videoRefs.current[i] = el)}
          className="absolute inset-0 w-full h-screen object-cover aspect-video"
          src={src}
          muted
          loop
          playsInline
          style={{
            opacity: i === activeVideo ? 1 : 0,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      ))}

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

      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (particlesRef.current[i] = el)}
          className="absolute w-2 h-2 bg-[#fe7200] rounded-full opacity-30 blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <h1
        ref={headingRef}
        className="relative z-10 text-5xl md:text-7xl font-bold text-[#fe7200] drop-shadow-lg"
      >
        Discover AI Videos Magic
      </h1>

      <p className="relative z-10 mt-6 text-xl text-white font-semibold max-w-2xl drop-shadow-md">
        {text}
        <span className="text-[#fe7200] font-bold">|</span>
      </p>
    </section>
  );
}
