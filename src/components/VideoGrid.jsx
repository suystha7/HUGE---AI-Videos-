"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    id: 1,
    title: "Epic Mountain Biking Adventure",
    username: "TrailBlazer",
    views: "12.4k views",
    duration: "03:45",
    thumbnail: "/assets/thumbnails/biking_thumb.jpg",
    videoSrc: "/assets/videos/biking.mp4",
    avatar: "/assets/avatars/trailblazer.jpg",
  },
  {
    id: 2,
    title: "Night City Timelapse",
    username: "UrbanVisuals",
    views: "8.7k views",
    duration: "01:30",
    thumbnail: "/assets/thumbnails/city_thumb.jpg",
    videoSrc: "/assets/videos/city_timelapse.mp4",
    avatar: "/assets/avatars/urbanvisuals.jpg",
  },
  {
    id: 3,
    title: "Delicious Vegan Recipes",
    username: "HealthyEats",
    views: "22k views",
    duration: "05:12",
    thumbnail: "/assets/thumbnails/vegan_thumb.jpg",
    videoSrc: "/assets/videos/vegan_recipes.mp4",
    avatar: "/assets/avatars/healthyeats.jpg",
  },
  {
    id: 4,
    title: "Street Art Around the World",
    username: "ArtExplorer",
    views: "14.1k views",
    duration: "04:20",
    thumbnail: "/assets/thumbnails/streetart_thumb.jpg",
    videoSrc: "/assets/videos/street_art.mp4",
    avatar: "/assets/avatars/artexplorer.jpg",
  },
  {
    id: 5,
    title: "Ocean Waves Relaxation",
    username: "NatureSounds",
    views: "30k views",
    duration: "10:00",
    thumbnail: "/assets/thumbnails/ocean_thumb.jpg",
    videoSrc: "/assets/videos/ocean_waves.mp4",
    avatar: "/assets/avatars/naturesounds.jpg",
  },
  {
    id: 6,
    title: "DIY Home Improvement Tips",
    username: "HandyHelper",
    views: "5.5k views",
    duration: "07:15",
    thumbnail: "/assets/thumbnails/diy_thumb.jpg",
    videoSrc: "/assets/videos/diy_home.mp4",
    avatar: "/assets/avatars/handyhelper.jpg",
  },
  {
    id: 7,
    title: "Wildlife Safari Highlights",
    username: "SafariLife",
    views: "18.2k views",
    duration: "06:48",
    thumbnail: "/assets/thumbnails/safari_thumb.jpg",
    videoSrc: "/assets/videos/safari_highlights.mp4",
    avatar: "/assets/avatars/safarilife.jpg",
  },
  {
    id: 8,
    title: "Tech Reviews: Latest Gadgets",
    username: "GadgetGuru",
    views: "11k views",
    duration: "08:30",
    thumbnail: "/assets/thumbnails/tech_thumb.jpg",
    videoSrc: "/assets/videos/tech_reviews.mp4",
    avatar: "/assets/avatars/gadgetguru.jpg",
  },
];


export default function VideoGrid() {
  return (
    <section
      id="features"
      className="relative py-20 px-6 text-white overflow-hidden z-10"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-90" />

      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#fe7200] opacity-30 rounded-full blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
          }}
        />
      ))}

      <h2 className="text-4xl text-orange-600 font-extrabold mb-14 text-center relative z-10">
        🎬 Featured AI Videos
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative z-10">
        {videos.map((video, index) => (
          <VideoCard key={`${video.id}-${index}`} video={video} index={index} />
        ))}
      </div>
    </section>
  );
}

function VideoCard({ video, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        delay: index * 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="cursor-pointer rounded-2xl backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
    > 
      <div className="relative w-full aspect-[16/9]">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-md font-mono">
          {video.duration}
        </div>
      </div>

      <div className="flex items-center gap-3 px-4 py-3">
        <img
          src={video.avatar}
          alt={`${video.username} avatar`}
          className="w-9 h-9 rounded-full object-cover"
          loading="lazy"
        />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold line-clamp-1 text-black">
            {video.title}
          </h3>
          <p className="text-xs text-gray-600">
            {video.username} • {video.views}
          </p>
        </div>
      </div>
    </div>
  );
}
