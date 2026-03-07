import { useTranslation } from "react-i18next";
import Section from "../ui/Section";

export default function About() {
  const { t } = useTranslation();

  return (
    <Section id="about" className="bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("about.title")}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-card shadow-sm border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/10 rounded-tr-full -z-10" />
          
          <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
