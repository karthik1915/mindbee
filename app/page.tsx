import Courses from "./components/Courses";
import Footer from "./components/footer";
import HeroSection2 from "./components/HeroSection2";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <>
      <HeroSection2 />
      <Courses />
      <Reviews />
      <Footer />
    </>
  );
}
