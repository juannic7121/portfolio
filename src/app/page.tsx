import {
  About,
  CaseStudies,
  Contact,
  Experience,
  FeaturedWebsites,
  Hero,
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
      <FeaturedWebsites />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <CaseStudies />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
