import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VideoGrid from "@/components/VideoGrid";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <About />
        <VideoGrid />
        <Footer />
      </main>
    </>
  );
}
