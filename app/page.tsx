import ContactSection from "./components/ContactSection";
import Courses from "./components/Courses";
import FAQSection from "./components/FAQ";
import Footer from "./components/footer";
import HeroSection2 from "./components/HeroSection2";
import Reviews from "./components/Reviews";
import StepsSection from "./components/StepsSection";

export default function Home() {
  return (
    <>
      <HeroSection2 />
      <Courses />
      <StepsSection />
      <FAQSection />
      <Reviews />
      <ContactSection />
      <Footer />
    </>
  );
}
