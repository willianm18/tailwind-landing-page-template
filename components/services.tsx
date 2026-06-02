"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Automação WhatsApp",
    description: "Fluxos inteligentes de atendimento, cobrança e notificações via WhatsApp Business API.",
    features: ["Chatbots com IA", "Cobrança automatizada", "Notificações em tempo real", "Relatórios de campanha"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    gradient: "from-emerald-500/10 to-emerald-500/5",
    border: "hover:border-emerald-500/30",
    accent: "text-emerald-500",
  },
  {
    title: "Pagamentos & Boletos",
    description: "Integração completa com meios de pagamento: PIX, cartão, boleto bancário com emissão automática.",
    features: ["Gateway PIX e Cartão", "Emissão de boletos", "Conciliação automática", "Split de pagamentos"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    gradient: "from-primary/10 to-primary/5",
    border: "hover:border-primary/30",
    accent: "text-primary",
  },
  {
    title: "Sistemas Web",
    description: "Plataformas sob medida: painéis administrativos, portais, marketplaces e sistemas corporativos.",
    features: ["Next.js & React", "APIs RESTful", "Banco de dados", "Deploy & infraestrutura"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    gradient: "from-violet-500/10 to-violet-500/5",
    border: "hover:border-violet-500/30",
    accent: "text-violet-500",
  },
  {
    title: "APIs & Integrações",
    description: "Conecte sistemas, ERPs e ferramentas com APIs robustas e integrações personalizadas.",
    features: ["Integração ERP/SAP", "Webhooks & eventos", "Conectores prontos", "Documentação automática"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    gradient: "from-amber-500/10 to-amber-500/5",
    border: "hover:border-amber-500/30",
    accent: "text-amber-500",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 mb-4 px-4 py-1.5 text-xs font-medium text-primary">
            Nossos Serviços
          </Badge>
          <h2 className="font-heading text-3xl leading-tight tracking-tight md:text-4xl">
            Soluções completas para{" "}
            <span className="text-primary">transformar seu negócio</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Da automação de processos ao desenvolvimento de sistemas, entregamos tecnologia que gera resultado.
          </p>
        </div>

        {/* Services grid */}
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
                <CardDescription className="text-sm">{service.description}</CardDescription>
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
      </div>
    </section>
  );
}