import "./css/style.css";

import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const SITE_URL = "https://landing-page.willianramthun.store";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NexFlow - Automação & Desenvolvimento de Sistemas | RS",
    template: "%s | NexFlow",
  },
  description:
    "Automatize qualquer processo do seu negócio. Criamos sistemas web sob medida, integrações e fluxos automáticos para empresas no Rio Grande do Sul e em todo o Brasil.",
  keywords: [
    "automação de processos",
    "desenvolvimento de sistemas",
    "sistemas web sob medida",
    "automação empresarial",
    "integração de sistemas",
    "desenvolvimento web RS",
    "automação Rio Grande do Sul",
    "sistemas para empresas",
  ],
  authors: [{ name: "NexFlow" }],
  creator: "NexFlow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "NexFlow",
    title: "NexFlow - Automação & Desenvolvimento de Sistemas",
    description:
      "Automatize qualquer processo do seu negócio. Sistemas web sob medida que trabalham por você, 24 horas por dia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexFlow - Automação & Desenvolvimento de Sistemas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexFlow - Automação & Desenvolvimento de Sistemas",
    description:
      "Automatize qualquer processo do seu negócio. Sistemas web sob medida que trabalham por você, 24 horas por dia.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "NexFlow",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-51-99665-8329",
        contactType: "customer service",
        availableLanguage: "Portuguese",
      },
      email: "willian_ramthun@hotmail.com",
      areaServed: "BR",
      sameAs: [`https://wa.me/5551996658329`],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "NexFlow",
      description:
        "Automação de processos e desenvolvimento de sistemas web sob medida para empresas no Rio Grande do Sul e em todo o Brasil.",
      url: SITE_URL,
      telephone: "+55-51-99665-8329",
      email: "willian_ramthun@hotmail.com",
      address: {
        "@type": "PostalAddress",
        addressRegion: "RS",
        addressCountry: "BR",
      },
      priceRange: "$$",
      openingHours: "Mo-Fr 08:00-18:00",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Automação e Desenvolvimento",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automação de Processos",
              description: "Automatização de fluxos de trabalho, notificações e tarefas repetitivas.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sistemas Web Sob Medida",
              description: "Desenvolvimento de sistemas web personalizados, painéis e portais.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Integrações & APIs",
              description: "Integração entre sistemas, ERPs e ferramentas via APIs.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Consultoria em Automação",
              description: "Mapeamento de processos e estratégia de automação para empresas.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "NexFlow",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "pt-BR",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background font-sans text-foreground antialiased">
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}