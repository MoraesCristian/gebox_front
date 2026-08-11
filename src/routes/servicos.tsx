import { createFileRoute } from "@tanstack/react-router";
import { FileText, Receipt, Users, TrendingUp, Building2, Briefcase } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  component: Servicos,
  head: () => ({
    meta: [
      { title: "Serviços — GEBOX" },
      { name: "description", content: "Contabilidade completa: abertura de empresa, impostos, folha de pagamento e mais." },
    ],
  }),
});

const servicos = [
  { icon: Users, title: "Abertura de empresa", desc: "Abra seu CNPJ " },
  { icon: Building2, title: "Contabilidade completa", desc: "Tempo e segurança para gerir seu negócio." },
  { icon: Receipt, title: "RH - Folha de pagamento", desc: "Adimistração sem segredo." },
  { icon: FileText, title: "Emissão de relatórios", desc: "Tudo auditado para sua proteção." },
  { icon: Briefcase, title: "ERP", desc: "Integre o fluxo de informação." },
  { icon: TrendingUp, title: "Consultoria Tributária", desc: "Planejamento para reduzir impostos de forma legal e segura." },

];

function Servicos() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">Serviços</p>
        <h1 className="mt-3 text-5xl md:text-6xl font-bold">Uma caixa de <span className="gradient-text">soluções</span> para seu negócio</h1>
        <p className="mt-6 text-lg text-muted-foreground">Uma contabilidade digital que pensa em você, digitaliza o burocrático e chato, humaniza e personaliza o atendimento.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicos.map((s) => (
          <div
            key={s.title}
            className="p-8 rounded-2xl bg-card border border-border hover:shadow-elegant hover:-translate-y-1 transition-smooth"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
