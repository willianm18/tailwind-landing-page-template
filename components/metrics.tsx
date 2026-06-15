"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  prefix?: string;
  description: string;
}

function Counter({ end, suffix = "", label, prefix = "", description }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl font-bold tracking-tight text-primary md:text-5xl">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="mt-1 text-base font-semibold text-foreground">{label}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default function Metrics() {
  return (
    <section className="relative border-y border-border/40 bg-muted/20 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <Counter end={40} suffix="%" label="Menos tempo gasto" description="em tarefas repetitivas" />
          <Counter end={3} suffix="x" label="Mais produtividade" description="com processos automatizados" />
          <Counter end={100} suffix="%" label="Feito sob medida" description="para o seu negócio" />
          <Counter end={24} suffix="h" label="Funcionando" description="por dia, todos os dias" />
        </div>
      </div>
    </section>
  );
}
