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

        {/* CTA below testimonials */}
        <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
          <h3 className="font-heading text-2xl font-medium md:text-3xl">
            Pronto para ter o mesmo resultado?
          </h3>
          <p className="mt-3 text-muted-foreground">
            Conte seu desafio e vou te mostrar como a automação pode resolver.
          </p>
          <a
            href={`https://wa.me/5551996658329?text=${encodeURIComponent("Olá! Quero automatizar processos no meu negócio. Pode me ajudar?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/80 hover:scale-105"
          >
            Falar no WhatsApp agora
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
