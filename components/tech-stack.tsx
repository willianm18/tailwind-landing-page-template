"use client";

import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    title: "Mais tempo para o que importa",
    description: "Elimine horas gastas em tarefas repetitivas. Seus colaboradores focam no que realmente gera valor.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Menos erros, mais precisão",
    description: "Processos manuais geram falhas. A automação executa com precisão toda vez, sem exceções.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Escala sem contratar",
    description: "Dobre sua operação sem dobrar a equipe. A automação cresce com seu negócio sem custo linear.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    title: "Funciona 24h por dia",
    description: "Enquanto você dorme, seu sistema trabalha. Atendimento, cobranças e notificações no horário certo.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Retorno rápido sobre o investimento",
    description: "A maioria dos nossos clientes recupera o investimento em menos de 3 meses com a economia de tempo.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    title: "Integrado ao que você já usa",
    description: "Não precisa trocar nada. Conectamos a automação ao WhatsApp, e-mail, sistema de gestão e qualquer ferramenta que você já utilize.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
];

export default function WhyAutomate() {
  return (
    <section className="border-y border-border/40 bg-muted/20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 mb-4 px-4 py-1.5 text-xs font-medium text-primary">
            Por que automatizar?
          </Badge>
          <h2 className="font-heading text-3xl leading-tight tracking-tight md:text-4xl">
            O que muda quando você para{" "}
            <span className="text-primary">de fazer na mão</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Automatizar não é só sobre tecnologia — é sobre liberdade para crescer.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${benefit.bg} ${benefit.color}`}>
                {benefit.icon}
              </div>
              <h3 className="mb-2 font-heading text-lg font-medium">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
