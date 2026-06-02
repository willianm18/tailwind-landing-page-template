export const metadata = {
  title: "NexFlow - Automação Inteligente & Desenvolvimento Web",
  description:
    "Automatize fluxos de pagamentos e boletos. Desenvolvemos sistemas web sob medida para sua empresa.",
};

import Hero from "@/components/hero";
import Services from "@/components/services";
import Metrics from "@/components/metrics";
import Process from "@/components/process";
import TechStack from "@/components/tech-stack";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Metrics />
      <Process />
      <TechStack />
      <Testimonials />
      <Contact />
    </>
  );
}