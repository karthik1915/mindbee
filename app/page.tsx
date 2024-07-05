import ContactSection from "./components/ContactSection";
import Courses from "./components/Courses";
import FAQSection from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import Reviews from "./components/Reviews";
import StepsSection from "./components/StepsSection";
import WhatWeDoSection from "./components/WhatWeDoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Courses />
      <StepsSection />
      <WhatWeDoSection />
      <FAQSection />
      <Reviews />
      <ContactSection />
    </>
  );
}
