"use client";

import { Badge } from "@/components/ui/badge";

const techs = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Linguagem" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Banco" },
  { name: "Redis", category: "Cache" },
  { name: "Docker", category: "Infra" },
  { name: "AWS", category: "Cloud" },
  { name: "RabbitMQ", category: "Mensageria" },
  { name: "WhatsApp API", category: "API" },
  { name: "Mercado Pago", category: "Pagamentos" },
  { name: "OpenAI", category: "IA" },
  { name: "Tailwind CSS", category: "Frontend" },
];

export default function TechStack() {
  return (
    <section className="border-y border-border/40 bg-muted/20 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-heading text-3xl leading-tight tracking-tight md:text-4xl">
            Stack <span className="text-primary">tecnológica</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Trabalhamos com as ferramentas mais modernas do mercado para entregar performance e escalabilidade.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="group relative rounded-xl border border-border/50 bg-card px-4 py-3 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <p className="text-sm font-medium">{tech.name}</p>
              <p className="text-[10px] text-muted-foreground">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}