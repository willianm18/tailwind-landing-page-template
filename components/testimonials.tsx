"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Antes eu passava horas enviando cobranças manualmente. Hoje o sistema faz tudo sozinho e eu foco em crescer o negócio. Foi o melhor investimento que fiz esse ano.",
    author: "Rodrigo S.",
    role: "Proprietário, Clínica Odontológica",
    initials: "RS",
    gradient: "from-emerald-500/10 to-emerald-500/5",
  },
  {
    quote: "Precisávamos conectar nosso sistema de pedidos com o estoque e a nota fiscal. Em uma semana estava tudo funcionando. Economizamos horas por dia de retrabalho.",
    author: "Fernanda M.",
    role: "Gestora de Operações, Distribuidora",
    initials: "FM",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    quote: "Minha equipe não precisava de mais gente, precisava de processo. Com a automação resolvemos gargalos que atrasavam entregas há meses. Resultado em menos de 2 semanas.",
    author: "Paulo R.",
    role: "CEO, E-commerce",
    initials: "PR",
    gradient: "from-amber-500/10 to-amber-500/5",
  },
];

export default function Testimonials() {
  return (
    <section id="cases" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 mb-4 px-4 py-1.5 text-xs font-medium text-primary">
            Clientes
          </Badge>
          <h2 className="font-heading text-3xl leading-tight tracking-tight md:text-4xl">
            Resultados que <span className="text-primary">falam por si</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Empresas de diferentes segmentos que economizaram tempo e dinheiro com automação.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card
              key={item.author}
              className={`group relative border-border/50 bg-gradient-to-br ${item.gradient} transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5`}
            >
              <CardContent className="p-6">
                <svg className="mb-4 h-8 w-8 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.144 11 15c0 1.93-1.57 3.5-3.5 3.5-1.258 0-2.464-.56-2.917-1.179zM15.583 17.321C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C20.591 11.69 22 13.144 22 15c0 1.93-1.57 3.5-3.5 3.5-1.258 0-2.464-.56-2.917-1.179z" />
                </svg>

                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">&ldquo;{item.quote}&rdquo;</p>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.author}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
