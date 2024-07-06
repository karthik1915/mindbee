import ContactSection from "./components/ContactSection";
import Courses from "./components/Courses";
import FAQSection from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import Reviews from "./components/Reviews";
import StepsSection from "./components/StepsSection";
import Consultation from "./components/Consultation";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Consultation />
      <Courses />
      <StepsSection />
      <FAQSection />
      <Reviews />
      <ContactSection />
    </>
  );
}
