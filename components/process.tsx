"use client";

import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    title: "Descoberta",
    description: "Entendemos seu negócio, mapeamos os processos e identificamos oportunidades de automação.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Desenhamos a arquitetura, definimos o fluxo de automação e alinhamos expectativas.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Implementamos a solução com entregas contínuas, testes automatizados e revisão de código.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Implantação",
    description: "Publicamos em produção, monitoramos métricas e garantimos que tudo funcione perfeitamente.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="processo" className="relative py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 mb-4 px-4 py-1.5 text-xs font-medium text-primary">
            Metodologia
          </Badge>
          <h2 className="font-heading text-3xl leading-tight tracking-tight md:text-4xl">
            Como <span className="text-primary">entregamos</span> seu projeto
          </h2>
          <p className="mt-4 text-muted-foreground">
            Um processo transparente e eficiente, do briefing à implantação.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-primary via-chart-2 to-amber-500 max-md:hidden" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative md:flex md:items-start md:gap-8">
                {/* Number indicator - desktop */}
                <div className="relative z-10 hidden md:flex md:h-16 md:w-16 md:items-center md:justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-background shadow-lg shadow-primary/10">
                    <span className="font-heading text-lg font-bold text-primary">{step.number}</span>
                  </div>
                </div>

                {/* Card */}
                <div className="group relative rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 md:flex-1">
                  {/* Mobile number */}
                  <div className="mb-4 flex items-center gap-3 md:hidden">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                      <span className="font-heading text-sm font-bold text-primary">{step.number}</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-medium">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}