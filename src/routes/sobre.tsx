import { createFileRoute } from "@tanstack/react-router";
import { Target, Heart, Users } from "lucide-react";
import instagramImg from "@/assets/instagram.jpeg";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
  head: () => ({
    meta: [
      { title: "Sobre — Gebox" },
      { name: "description", content: "Conheça a história e os valores da Gebox." },
    ],
  }),
});

function Sobre() {
  return (
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Quem somos</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold">Contabilidade feita por gente, <span className="gradient-text">potencializada por tecnologia</span>.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            O principal objetivo da GEBOX é proporcionar aos seus clientes seguraça e informações fundamentais necessarias para o crescimento sustentável e bem sucedido de seus negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            { icon: Target, title: "Missão", desc: "Tornar a contabilidade simples, acessível e estratégica para todos." },
            { icon: Heart, title: "Valores", desc: "Transparência, agilidade e cuidado em cada interação." },
            { icon: Users, title: "Time", desc: "Contadores especialistas e tecnologia trabalhando juntos por você." },
          ].map((c) => (
            <div key={c.title} className="p-8 rounded-2xl border border-border bg-card shadow-soft">
              <c.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
        <section className="mt-24">

          <div className="rounded-3xl border border-border bg-card shadow-elegant overflow-hidden">

            <div className="grid lg:grid-cols-2 items-center">

              {/* Texto */}
              <div className="p-10 md:p-14">

                <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  Redes Sociais
                </span>

                <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
                  Acompanhe a Gebox no
                  <span className="gradient-text"> Instagram</span>
                </h2>

                <p className="mt-6 text-lg text-muted-foreground leading-8">
                  Compartilhamos conteúdos exclusivos sobre contabilidade,
                  gestão financeira, empreendedorismo, planejamento tributário
                  e dicas para ajudar sua empresa a crescer de forma segura.
                </p>

                <div className="mt-8 space-y-3">

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Dicas práticas para empresários.</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Conteúdo atualizado semanalmente.</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Informações simples e objetivas.</span>
                  </div>

                </div>

                <div className="mt-10 flex flex-wrap gap-4">

                  <a
                    href="https://instagram.com/gebox.oficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl gradient-hero px-6 py-3 text-white font-semibold hover:opacity-90 transition"
                  >
                    Seguir no Instagram
                  </a>

                </div>

              </div>

              {/* Imagem */}
              <div className="bg-secondary/30 flex justify-center p-8">

                <img
                  src={instagramImg}
                  alt="Instagram Gebox"
                  className="w-full max-w-sm rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
                />

              </div>

            </div>

          </div>

        </section>

        <div className="mt-20 p-10 md:p-14 rounded-3xl bg-secondary/50">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed">
            "Mais que números, entregamos clareza e tempo para que você foque no crescimento do seu negócio."
          </p>
          <p className="mt-4 text-muted-foreground">— Equipe Gebox</p>
        </div>

      </div>

  );
}
