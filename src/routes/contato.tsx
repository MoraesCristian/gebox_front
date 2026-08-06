import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MousePointerClick } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contato")({
  component: Contato,
  head: () => ({
    meta: [
      { title: "Contato — Gebox" },
      { 
        name: "description", 
        content: "Fale com nosso time. Estamos prontos para atender você." 
      },
    ],
  }),
});

function Contato() {

  const contatos = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@gebox.com.br",
      link: "mailto:contato@gebox.com.br",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "(41) 99995-9434",
      link: "https://api.whatsapp.com/send?phone=5541999959434",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "(41) 99108-7102",
      link: "https://api.whatsapp.com/send?phone=5541991087102",
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Rua Visconde do Rio Branco, 1358 - 19º andar, Centro, Curitiba - PR",
      link: "https://www.google.com/maps/place/Thor+Empresarial/@-25.4336922,-49.2823265,17z/data=!3m2!4b1!5s0x94dce38ac39efb63:0x32b4f57565056948!4m6!3m5!1s0x94dce47383789adf:0x7e659894973c6041!8m2!3d-25.4336971!4d-49.2797516!16s%2Fg%2F11c4b3bcx6?entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon:MousePointerClick,
      title: 'Clique',
      value: 'Clique nos icones acima para ser redirecionado'
    },
  ];


  return (
    <div className="bg-gradient-to-b from-secondary/30 via-background to-background">
      <Toaster />

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            Contato
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold">
            Vamos conversar sobre o seu
            <span className="gradient-text"> negócio</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Tire suas dúvidas, solicite uma proposta ou fale diretamente com
            nossos especialistas.
          </p>
        </div>

        {/* Banner */}
        <div className="mt-14 rounded-3xl gradient-hero text-white p-8 md:p-10 shadow-elegant">
          <h2 className="text-2xl md:text-3xl font-bold">
            Atendimento rápido e humanizado
          </h2>

          <p className="mt-3 text-white/90 max-w-2xl">
            Nossa equipe está pronta para entender sua empresa e indicar a melhor
            solução para sua contabilidade.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {contatos.map((c) => {
            const Card = (
              <div className="group flex gap-5 p-6 rounded-3xl bg-card border border-border hover:border-primary hover:shadow-elegant hover:-translate-y-1 transition-smooth cursor-pointer h-full">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary transition-all">
                  <c.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">
                    {c.title}
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    {c.value}
                  </p>
                </div>
              </div>
            );

            return c.link ? (
              <a
                key={c.value}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {Card}
              </a>
            ) : (
              <div key={c.value}>
                {Card}
              </div>
            );
          })}
        </div>

        {/* Rodapé */}
        <div className="mt-14 rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
          <h3 className="text-2xl font-bold">
            Precisa de ajuda para abrir sua empresa?
          </h3>

          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Entre em contato conosco pelo WhatsApp e receba uma consultoria
            inicial sem compromisso.
          </p>
        </div>

      </div>
    </div>
  );
}

