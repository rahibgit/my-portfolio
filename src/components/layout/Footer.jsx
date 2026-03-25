import { useTranslation } from "react-i18next";
import { Github, Mail, Phone } from "lucide-react";
import Container from "../ui/Container";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-start">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Rahib.dev
            </h3>
            <p className="text-muted-foreground mt-2 max-w-sm">
              {t("hero.tagline")}
            </p>
          </div>
          
          <div className="flex space-x-6 rtl:space-x-reverse">
            <a
              href="https://github.com/rahibgit"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors p-2 bg-secondary rounded-full hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:r2001hb@gmail.com"
              className="text-foreground/70 hover:text-primary transition-colors p-2 bg-secondary rounded-full hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/qr/FWH7537VCQ6ZB1"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors p-2 bg-secondary rounded-full hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {t("footer.rights")}
          </p>
          <div className="text-muted-foreground text-sm flex gap-4">
            <span>Built with React & Tailwind</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
