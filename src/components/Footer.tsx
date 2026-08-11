import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import logo from "@/assets/logo.jpeg";
import crcLogo from "@/assets/logo_crc.png";
import cfcLogo from "@/assets/logo_cfc2.png";


export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-bold text-lg mb-4">
            <img src={logo} alt="Contábil" className="w-9 h-9" />
            GEBOX Contabilidade
          </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="rounded-xl border border-border bg-background p-3 shadow-sm w-36 h-24 flex items-center justify-center">
                <img
                  src={crcLogo}
                  alt="CRC"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="rounded-xl border border-border bg-background p-3 shadow-sm w-36 h-24 flex items-center justify-center">
                <img
                  src={cfcLogo}
                  alt="CFC"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Navegação</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/sobre" className="hover:text-primary">Sobre</Link></li>
            <li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li>
            <li><Link to="/planos" className="hover:text-primary">Planos</Link></li>
            <li><Link to="/contato" className="hover:text-primary">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Contato</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>contato@gebox.com.br</span></li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>(41) 99995-9434</span></li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>(41) 99108-7102</span></li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>Rua Visconde do Rio Branco, 1358 19 andar - Centro - Curitiba - PR</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">

        <p>
          © {new Date().getFullYear()} Todos os direitos reservados a Gebox 40.866.357/0001-71, Registro CRC-PR N 011385
        </p>

        <div className="flex items-center gap-3">
          <span className="font-medium">Siga-nos:</span>

          <a
            href="https://www.instagram.com/gebox.oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaInstagram className="h-5 w-5" />
          </a>

          <a
            href="https://linkedin.com/company/gebox.oficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedinIn className="h-5 w-5" />
          </a>
        </div>

        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/cristian-moraes-17b371226/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            Cristian Moraes
          </a>
</p>

      </div>
    </div>
    </footer>
  );
}
