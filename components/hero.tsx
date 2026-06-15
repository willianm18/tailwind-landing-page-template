"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const automationTypes = [
  { label: "Vendas", icon: "💰" },
  { label: "Atendimento", icon: "💬" },
  { label: "Financeiro", icon: "📊" },
  { label: "Logística", icon: "🚚" },
  { label: "RH", icon: "👥" },
  { label: "Marketing", icon: "📣" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[700px] w-[700px] rounded-full bg-chart-2/5 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 mb-6 px-4 py-1.5 text-xs font-medium text-primary">
            Automação & Desenvolvimento de Sistemas
          </Badge>

          <h1 className="font-heading text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Seu negócio no{" "}
            <span className="relative text-primary">
              piloto automático
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Automatizamos qualquer processo do seu negócio — do atendimento ao financeiro.
            Criamos sistemas web sob medida que trabalham por você, 24 horas por dia.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={`https://wa.me/5551996658329?text=${encodeURIComponent("Olá! Quero saber mais sobre automação para meu negócio.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold whitespace-nowrap text-primary-foreground transition-all hover:bg-primary/80 hover:scale-105"
            >
              Falar no WhatsApp
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </Link>
            <Link
              href="#servicos"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-semibold whitespace-nowrap text-foreground transition-all hover:bg-muted"
            >
              Ver Soluções
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
          </div>

          {/* Automation types pills */}
          <div className="mt-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Automatizamos qualquer área
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {automationTypes.map((type) => (
                <span
                  key={type.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                >
                  <span>{type.icon}</span>
                  {type.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
