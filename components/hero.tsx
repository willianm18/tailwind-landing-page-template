"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-chart-2/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 mb-6 px-4 py-1.5 text-xs font-medium text-primary">
            Automação Inteligente
          </Badge>

          <h1 className="font-heading text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Automatize seus processos{" "}
            <span className="text-primary">sem complicação</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Do WhatsApp à emissão de boletos, criamos fluxos de automação inteligentes
            e sistemas web sob medida para transformar a operação do seu negócio.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#contato"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold whitespace-nowrap text-primary-foreground transition-all hover:bg-primary/80"
            >
              Começar Agora
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="#servicos"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-semibold whitespace-nowrap text-foreground transition-all hover:bg-muted"
            >
              Ver Serviços
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-background bg-gradient-to-br from-primary/20 to-chart-2/20"
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">+50 empresas</span> confiam na NexFlow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}