import {
  About,
  CaseStudies,
  Contact,
  Experience,
  FAQ,
  FeaturedWebsites,
  Hero,
  Opportunities,
  Process,
  Projects,
  Services,
  Skills,
  Testimonials,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedWebsites />
      <Skills />
      <Experience />
      <Projects />
      <CaseStudies />
      <Process />
      <Testimonials />
      <Opportunities />
      <FAQ />
      <Contact />
    </>
  );
}
