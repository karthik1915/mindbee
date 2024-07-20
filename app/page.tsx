import ContactSection from "./components/ContactSection";
import Courses from "./components/Courses";
import FAQSection from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import Reviews from "./components/Reviews";
import StepsSection from "./components/StepsSection";
import Consultation from "./components/Consultation";
import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
        <HeroSection />
      </header>
      <main>
        <section
          id="services"
          className="py-4"
          role="region"
          aria-label="Services by Mindbees"
        >
          <header className="py-3">
            <h2 className="text-center font-exo text-4xl font-bold tracking-wide text-headline">
              Our Services
            </h2>
            <p className="text-balance px-3 pt-1 text-center text-lg text-subheadline md:text-2xl">
              Mindbees offers extensive services regarding Salesforce and{" "}
              <abbr title="Customer Relationship Management">CRM</abbr>
            </p>
          </header>
          <Consultation />
          <Courses />
        </section>
        <StepsSection />
        <FAQSection />
        <Reviews />
        <ContactSection />
      </main>
    </>
  );
}
