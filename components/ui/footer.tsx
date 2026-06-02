import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Automatizamos processos e desenvolvemos sistemas web sob medida para impulsionar o crescimento do seu negócio.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#servicos" className="text-muted-foreground transition-colors hover:text-foreground">Automação WhatsApp</Link></li>
              <li><Link href="#servicos" className="text-muted-foreground transition-colors hover:text-foreground">Pagamentos & Boletos</Link></li>
              <li><Link href="#servicos" className="text-muted-foreground transition-colors hover:text-foreground">Sistemas Web</Link></li>
              <li><Link href="#servicos" className="text-muted-foreground transition-colors hover:text-foreground">APIs & Integrações</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#processo" className="text-muted-foreground transition-colors hover:text-foreground">Metodologia</Link></li>
              <li><Link href="#cases" className="text-muted-foreground transition-colors hover:text-foreground">Cases</Link></li>
              <li><Link href="#contato" className="text-muted-foreground transition-colors hover:text-foreground">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@nexflow.com.br</li>
              <li>(11) 99999-8888</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} NexFlow. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}