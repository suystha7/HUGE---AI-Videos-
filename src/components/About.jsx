"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const aboutContents = [
  {
    title: "About Us",
    description:
      "We create immersive AI video experiences powered by GSAP animations, Next.js routing, and intelligent video summaries. " +
      "Our team blends cutting-edge technology with creative storytelling to produce dynamic, engaging content that captivates and educates users. " +
      "By integrating advanced animation techniques and seamless user interface designs, we transform traditional videos into interactive journeys " +
      "that adapt intelligently to audience preferences.",
    bgImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Our Vision",
    description:
      "To redefine how people interact with content through AI-powered storytelling, motion design, and intuitive UI/UX. " +
      "We envision a future where digital narratives are not only visually stunning but also deeply personalized, evolving with each user’s behavior and interests. " +
      "Our mission is to break the boundaries between technology and creativity, enabling meaningful connections through immersive, fluid, and accessible experiences " +
      "that inspire and empower audiences worldwide.",
    bgImage:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Our Technology",
    description:
      "We utilize modern web technologies like React, Next.js, GSAP, and Swiper to deliver fluid and interactive experiences. " +
      "Our stack is carefully chosen to ensure performance, scalability, and a smooth user experience across devices. " +
      "GSAP enables us to craft complex animations with precision and efficiency, while Next.js provides robust routing and server-side rendering for fast load times. " +
      "Swiper powers intuitive carousels and sliders that enhance content navigation, resulting in a seamless and engaging digital journey for every visitor.",
    bgImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80",
  },
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-6 text-white transition-colors duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${aboutContents[activeIndex].bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "local",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0 transition-opacity duration-700"></div>

      <div className="relative z-10 w-full max-w-3xl flex items-center justify-center">
        <Swiper
          direction="vertical"
          mousewheel
          pagination={{ clickable: true }}
          modules={[Mousewheel, Pagination]}
          className="w-full h-[280px] sm:h-[320px] md:h-[400px]"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides
        >
          {aboutContents.map((content, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center justify-center text-center px-3 sm:px-6">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight">
                  {content.title}
                </h2>
                <p className="text-base sm:text-lg leading-relaxed tracking-wide drop-shadow-md max-w-xl">
                  {content.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
