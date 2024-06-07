import Courses from "./components/Courses";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import { OrbitingSection } from "./components/OrbitingSection";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <HeroSection2 />
      <OrbitingSection />
      <Courses />
      <Reviews />
    </>
  );
}
