import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Monitor, Smartphone, LayoutTemplate } from "lucide-react";
import Section from "../ui/Section";
import { cn } from "../../lib/utils";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: "web",
      title: t("services.web.title", "Web Development"),
      desc: t("services.web.desc", "Building responsive, modern and high-performance web applications using React and latest web standards."),
      icon: <Monitor className="w-10 h-10" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: "mobile",
      title: t("services.mobile.title", "Mobile Development"),
      desc: t("services.mobile.desc", "Creating cross-platform mobile apps for iOS and Android using Flutter with native-like performance."),
      icon: <Smartphone className="w-10 h-10" />,
      color: "from-teal-400 to-emerald-500"
    },
    {
      id: "ui",
      title: t("services.ui.title", "UI/UX Design Integration"),
      desc: t("services.ui.desc", "Translating Figma designs into pixel-perfect, interactive and accessible frontend code."),
      icon: <LayoutTemplate className="w-10 h-10" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <Section id="services" className="bg-background">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("nav.services")}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((svc, idx) => (
          <motion.div
            key={svc.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group relative bg-card border border-border rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br",
              svc.color
            )} />
            
            <div className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white bg-gradient-to-br shadow-lg",
              svc.color
            )}>
              {svc.icon}
            </div>
            
            <h3 className="text-2xl font-bold mb-4">{svc.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {svc.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
