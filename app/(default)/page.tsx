export const metadata = {
  title: {
    absolute: "NexFlow - Automação & Desenvolvimento de Sistemas | RS/Brasil",
  },
  description:
    "Automatize qualquer processo do seu negócio. Sistemas web sob medida, integrações e consultoria em automação. Rio Grande do Sul e todo o Brasil.",
  alternates: {
    canonical: "https://landing-page.willianramthun.store",
  },
};

import Hero from "@/components/hero";
import Services from "@/components/services";
import Metrics from "@/components/metrics";
import Process from "@/components/process";
import WhyAutomate from "@/components/tech-stack";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Services />
      <WhyAutomate />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
