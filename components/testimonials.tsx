"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "A NexFlow automatizou todo o fluxo de cobrança da nossa imobiliária. Reduzimos em 70% o tempo de emissão de boletos e o WhatsApp dispara automaticamente os lembretes.",
    author: "Carlos Mendes",
    role: "CTO, Grupo Imobiliário Omega",
    initials: "CM",
    gradient: "from-emerald-500/10 to-emerald-500/5",
  },
  {
    quote: "Precisávamos de um sistema web para gerenciar ordens de serviço. A NexFlow entregou em 6 semanas uma plataforma completa com integração a ERP e emissão de NF-e.",
    author: "Ana Oliveira",
    role: "Diretora de Operações, ServiTech",
    initials: "AO",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    quote: "Implementaram um fluxo de pagamento PIX + boleto que reduziu nossa inadimplência em 40%. A integração com WhatsApp foi o diferencial que nossos clientes amaram.",
    author: "Rafael Torres",
    role: "CEO, E-Commerce Nova Moda",
    initials: "RT",
    gradient: "from-amber-500/10 to-amber-500/5",
  },
];

export default function Testimonials() {
  return (
    <section id="cases" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 mb-4 px-4 py-1.5 text-xs font-medium text-primary">
            Cases & Depoimentos
          </Badge>
          <h2 className="font-heading text-3xl leading-tight tracking-tight md:text-4xl">
            Quem confia na <span className="text-primary">NexFlow</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Resultados reais de clientes que transformaram seus processos com nossas soluções.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card
              key={item.author}
              className={`group relative border-border/50 bg-gradient-to-br ${item.gradient} transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5`}
            >
              <CardContent className="p-6">
                {/* Quote icon */}
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