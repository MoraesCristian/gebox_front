import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Zap, BarChart3, Sparkles, CheckCircle2, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import bannerImg from "@/assets/banner.jpg";
import pessoaCelularImg from "@/assets/person_imagem.PNG";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GEBOX Contabilidade digital para o seu negócio" },
      { name: "description", content: "Contabilidade online, transparente e fluida. Planos mensais sem burocracia." },
    ],
  }),
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl -z-10" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-24 pb-24 md:pt-32 md:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LADO ESQUERDO */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background/60 backdrop-blur border border-border text-xs font-medium mb-8 shadow-soft">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                Contabilidade 100% digital
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                Contabilidade Digital
                <span className="block gradient-text mt-2">
                  FORA DA CAIXA
                </span>
              </h1>

              <p className="mt-8 text-lg text-muted-foreground max-w-xl">
                Você não precisa ficar no vácuo no WhatsApp por contabilidades
                digitais que te atendem através de robôs.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Planos a partir de R$89,00/mês</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Atendimento via WhatsApp</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Integração com os principais ERPs</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gradient-hero shadow-elegant"
                  asChild
                >
                  <Link to="/planos">
                    Abrir minha empresa grátis
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <Link to="/contato">
                    Trocar meu contador grátis
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center w-full min-h-[340px] md:min-h-[550px] mt-12 lg:mt-0">

          {/* Glow de fundo */}
          <div className="absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full bg-primary/15 blur-3xl" />

          {/* Card principal */}
          <div
            className="
              relative
              w-full
              max-w-[320px]
              sm:max-w-[420px]
              lg:max-w-[520px]
              aspect-square
              rounded-[24px]
              lg:rounded-[32px]
              overflow-hidden
              shadow-elegant
              border
              border-border
              bg-card
              z-10
            "
          >
            <img
              src={pessoaCelularImg}
              alt="Equipe GEBOX"
              className="w-full h-full object-cover"
            />
          </div>

          {/* WhatsApp */}
          <div
            className="
              absolute
              top-2
              left-2
              md:top-8
              md:-left-6
              bg-card/95
              backdrop-blur-md
              border
              border-border
              rounded-2xl
              p-3 md:p-4
              shadow-elegant
              z-20
              max-w-[180px] md:max-w-[260px]
            "
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />

              <span className="text-xs font-semibold text-primary">
                WhatsApp
              </span>
            </div>

            <p className="text-sm">
              Olá! Sua folha de pagamento já foi enviada e está disponível para consulta.
            </p>
            </div>

            {/* Card financeiro */}
            <div
              className="
                absolute
                bottom-2
                right-2
                md:bottom-10
                md:-right-8
                bg-card/95
                backdrop-blur-md
                border
                border-border
                rounded-2xl
                p-5
                shadow-elegant
                z-20
                min-w-[150px] md:min-w-[200px]
              "
            >
              <p className="text-xs text-muted-foreground mb-1">
                Economia tributária
              </p>

              <p className="text-2xl md:text-3xl font-bold text-primary">
                R$ 2.847
              </p>

              <p className="text-xs text-green-500 mt-1">
                +18% este mês
              </p>
            </div>

          </div>
            
          </div>

        </div>
      </section>

      {/* STATS BAR */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 -mt-8 sm:-mt-12 relative z-10">
        <div className="rounded-2xl bg-card border border-border shadow-elegant p-5 sm:p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8">
          {[
            { icon: Users, num: "+2.500", label: "Clientes ativos" },
            { icon: TrendingUp, num: "98%", label: "Satisfação" },
            { icon: Award, num: "12 anos", label: "De experiência" },
            { icon: ShieldCheck, num: "100%", label: "No prazo" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <s.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold leading-tight">{s.num}</div>
                <div className="text-[11px] sm:text-xs text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Tudo o que você precisa em um só lugar</h2>
          <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg">
            Plataforma + contadores especialistas trabalhando pelo seu negócio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: Zap, title: "Abertura rápida", desc: "Abra sua empresa em até 48h, online e sem dor de cabeça." },
            { icon: ShieldCheck, title: "Tudo em dia", desc: "Impostos, declarações e folha entregues no prazo, sempre." },
            { icon: BarChart3, title: "Relatórios claros", desc: "Acompanhe os resultados do seu negócio em tempo real." },
          ].map((f) => (
            <div
              key={f.title}
              className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-smooth hover:shadow-elegant hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth" />
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground mb-4 sm:mb-5 shadow-soft">
                <f.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="relative text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">{f.title}</h3>
              <p className="relative text-sm sm:text-base text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-12">
        <div className="rounded-2xl sm:rounded-3xl gradient-hero p-8 sm:p-12 md:p-16 text-center text-primary-foreground shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)]" />
          <h2 className="relative text-lg sm:text-xl lg:text-2xl font-bold max-w-3xl mx-auto leading-tight">
            O principal objetivo da Gebox é proporcionar aos seus clientes a segurança e as informações fundamentais necessárias para o crescimento sustentável e bem-sucedido de seus negócios.
          </h2>
          <p className="relative mt-3 sm:mt-4 text-primary-foreground/85 text-base sm:text-lg">Comece hoje, cancele quando quiser.</p>
          <Button
            size="lg"
            className="relative mt-6 sm:mt-8 h-12 px-8 w-full sm:w-auto bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link to="/planos">Escolher meu plano <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

