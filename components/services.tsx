"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Automação de Processos",
    description: "Elimine tarefas repetitivas e manuais. Automatizamos qualquer fluxo do seu negócio — notificações, cobranças, relatórios, aprovações e muito mais.",
    features: ["Fluxos de trabalho automáticos", "Envio de mensagens e notificações", "Geração de relatórios", "Regras e gatilhos personalizados"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    gradient: "from-emerald-500/10 to-emerald-500/5",
    border: "hover:border-emerald-500/30",
    accent: "text-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Sistemas Web Sob Medida",
    description: "Desenvolvemos plataformas completas para sua empresa: painéis de controle, portais de clientes, sistemas de gestão e muito mais.",
    features: ["Painéis administrativos", "Portais de clientes", "Controle de pedidos e estoque", "Relatórios e dashboards"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    gradient: "from-primary/10 to-primary/5",
    border: "hover:border-primary/30",
    accent: "text-primary",
    badge: "bg-primary/10 text-primary",
  },
  {
    title: "Integrações & Conectores",
    description: "Conectamos todos os sistemas que você já usa. Seu ERP, e-commerce, CRM e ferramentas de comunicação funcionando juntos, sem retrabalho.",
    features: ["Integração entre sistemas", "APIs e webhooks", "Sincronização de dados", "Conectores para ERPs e CRMs"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    gradient: "from-violet-500/10 to-violet-500/5",
    border: "hover:border-violet-500/30",
    accent: "text-violet-500",
    badge: "bg-violet-500/10 text-violet-600",
  },
  {
    title: "Consultoria em Automação",
    description: "Não sabe por onde começar? Mapeamos seus processos, identificamos o que pode ser automatizado e entregamos um plano claro com retorno real.",
    features: ["Mapeamento de processos", "Identificação de oportunidades", "Plano de automação", "Acompanhamento e suporte"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    gradient: "from-amber-500/10 to-amber-500/5",
    border: "hover:border-amber-500/30",
    accent: "text-amber-500",
    badge: "bg-amber-500/10 text-amber-600",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 mb-4 px-4 py-1.5 text-xs font-medium text-primary">
            Nossas Soluções
          </Badge>
          <h2 className="font-heading text-3xl leading-tight tracking-tight md:text-4xl">
            Do problema à solução,{" "}
            <span className="text-primary">sem complicação</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Seja qual for o processo que trava seu negócio, temos a solução. Trabalhamos com empresas de todos os segmentos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`group relative overflow-hidden border-border/50 bg-gradient-to-br ${service.gradient} transition-all duration-300 ${service.border} hover:shadow-xl hover:shadow-primary/5`}
            >
              <CardHeader>
                <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-background shadow-sm ${service.accent}`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Não encontrou o que precisa?{" "}
          <a
            href={`https://wa.me/5551996658329?text=${encodeURIComponent("Olá! Tenho um processo que quero automatizar e gostaria de conversar.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Fale comigo pelo WhatsApp
          </a>{" "}
          — se é repetitivo, dá pra automatizar.
        </p>
      </div>
    </section>
  );
}
