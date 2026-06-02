"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contato" className="relative py-20 md:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: info */}
          <div className="space-y-8">
            <Badge variant="outline" className="border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              Vamos Conversar
            </Badge>

            <h2 className="font-heading text-3xl leading-tight tracking-tight md:text-4xl">
              Pronto para{" "}
              <span className="text-primary">automatizar</span> seu negócio?
            </h2>

            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Conte-nos sobre seu desafio e nossa equipe entrará em contato em até 24 horas
              com uma proposta personalizada.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  text: "contato@nexflow.com.br",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  text: "(11) 99999-8888",
                },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <Card className="border-border/50 shadow-xl shadow-primary/5">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Solicite um Orçamento</CardTitle>
              <CardDescription>Preencha o formulário e retornaremos em até 24h.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <Input id="name" placeholder="Seu nome" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Empresa
                    </label>
                    <Input id="company" placeholder="Sua empresa" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    WhatsApp
                  </label>
                  <Input id="phone" type="tel" placeholder="(11) 99999-8888" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Como podemos ajudar?
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos sobre seu projeto ou desafio..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  {submitted ? "Mensagem Enviada ✓" : "Solicitar Orçamento"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="border-t border-border/40 pt-4">
              <p className="text-xs text-muted-foreground">
                Ao enviar, você concorda com nossa Política de Privacidade.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}