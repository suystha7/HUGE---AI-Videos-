"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloatingShapes from "./FloatingShapes";

gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    id: 1,
    title: "Presidents as Soldiers",
    thumbnail: "/assets/AI_Donald.jpg",
    bgGradient: "from-purple-500 via-pink-500 to-red-500",
    bgVideo: "/videos/bg1.mp4",
  },
  {
    id: 2,
    title: "AI in Medicine",
    thumbnail: "/thumb2.jpg",
    bgGradient: "from-green-400 via-blue-500 to-indigo-600",
    bgVideo: "/videos/bg2.mp4",
  },
  {
    id: 3,
    title: "Future of Robotics",
    thumbnail: "/thumb3.jpg",
    bgGradient: "from-yellow-400 via-red-400 to-pink-500",
    bgVideo: "/videos/bg3.mp4",
  },
];

export default function VideoGrid() {
  return (
    <section
      id="features"
      className="relative py-24 px-6 bg-gradient-to-br from-gray-50 to-gray-200 text-black overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight">
        Featured Experiences
      </h2>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {videos.map((video, index) => (
          <VideoCard key={video.id} video={video} index={index} />
        ))}
      </div>

      <FloatingShapes />
    </section>
  );
}

function VideoCard({ video, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        delay: index * 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative group overflow-hidden rounded-3xl shadow-xl bg-white transition-transform transform hover:scale-[1.03]"
    >
      {video.bgVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700"
          src={video.bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      <div
        className={`absolute inset-0 z-10 bg-gradient-to-tr ${video.bgGradient} opacity-30 group-hover:opacity-50 transition-opacity`}
      />

      <div className="relative z-20 flex flex-col items-center justify-center px-6 py-10 h-72 text-center">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mb-6"
        />
        <h3 className="text-xl font-semibold text-white drop-shadow-lg">
          {video.title}
        </h3>
        <p className="mt-2 text-sm text-white/90">Click to explore</p>
      </div>

      <div className="absolute inset-0 z-30 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-3xl">
        <span className="text-white font-semibold text-lg tracking-wide">
          Watch Now →
        </span>
      </div>
    </div>
  );
}
