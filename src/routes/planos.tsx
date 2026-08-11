import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import bannerPlanos from "@/assets/banner_planos.jpeg";

export const Route = createFileRoute("/planos")({
  component: Planos,
  head: () => ({
    meta: [
      { title: "Planos — Gebox" },
      { name: "description", content: "Planos mensais de contabilidade para MEI, ME e empresas em crescimento." },
    ],
  }),
});

const planos = [
  {
    name: "Box MEI",
    price: "89",
    desc: "Para você microempreendedor.",
    invoincing:'R$6.750 mês',
    features: ['Apoio NF-e, NFS-e, NFC-e', 'Contabilidade Completa','Suporte Online via WhatsApp'],
    highlight: false,
  },
  {
    name: "BOX 1",
    price: "179",
    desc: "Para você que está começando",
    invoincing:'R$8.000 mês',
    features: ['RH/Folha de pagamento - 1 Funcionário ','Apoio NF-e, NFS-e, NFC-e','Contabilidade Completa','Suporte Online via WhatsApp', 'Envio Mensal de CND'],
    highlight: false,
  },
  {
    name: "BOX 2",
    price: "379",
    desc: "Para micro empresas em crescimento.",
    invoincing:'R$15.000 mês',
    features: ['RH/Folha de pagamento - 2 Funcionários ','Apoio NF-e, NFS-e, NFC-e','Contabilidade Completa','Suporte Online via WhatsApp', 'Envio Mensal de CND','E-CNPJ 20% de desconto'],
    highlight: true,
  },
];

function Planos() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">PLANOS</p>
        <h1 className="mt-3 text-5xl md:text-6xl font-bold">Escolha seu plano <span className="gradient-text">ideal</span></h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {planos.map((p) => (
          <div
            key={p.name}
            className={`relative p-8 rounded-3xl border transition-smooth ${
              p.highlight
                ? "border-primary bg-card shadow-elegant scale-[1.02]"
                : "border-border bg-card hover:shadow-soft"
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold gradient-hero text-primary-foreground">
                Mais escolhido
              </span>
            )}
            <h3 className="text-2xl font-bold">{p.name}</h3>
            <p className="text-muted-foreground text-sm mt-1">{p.desc}</p>
            <p className="text-muted-foreground text-sm mt-1">{p.invoincing}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-sm text-muted-foreground">R$</span>
              <span className="text-5xl font-bold">{p.price}</span>
              <span className="text-muted-foreground">/mês</span>
            </div>
            <Button
              className={`w-full mt-6 h-11 ${p.highlight ? "gradient-hero" : ""}`}
              variant={p.highlight ? "default" : "outline"}
              asChild
            >
              <Link to="/contato">Contratar</Link>
            </Button>
            <ul className="mt-8 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <section className="mt-10">
        <div className="relative overflow-hidden rounded-3xl gradient-hero shadow-elegant">

          {/* Luz */}
          <div className="absolute -right-32 -top-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-0">

            {/* Texto */}
            
            <div className="p-8 md:p-12 lg:p-16">

              <span className="inline-flex px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">
                Atendimento Especializado
              </span>

              <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight">
                Não encontrou o plano ideal?
              </h2>

              <p className="mt-5 text-white/90 text-lg">
                Nossa equipe analisa gratuitamente a sua empresa e monta uma
                proposta personalizada de acordo com o seu faturamento e suas
                necessidades.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <Link to="/contato">
                    Falar com um especialista
                  </Link>
                </Button>
              </div>

            </div>

            {/* IMAGEM */}
            <div className="relative h-full min-h-[450px] overflow-hidden rounded-2xl">

              <img
                src={bannerPlanos}
                alt="Consultora Gebox"
                className="absolute inset-0 w-full h-full object-cover"
              />

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
