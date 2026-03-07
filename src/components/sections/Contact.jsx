import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, MapPin } from "lucide-react";
import Section from "../ui/Section";
import Container from "../ui/Container";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const contactLinks = [
    {
      id: "email",
      label: t("contact.email"),
      value: "r2001hb@gmail.com",
      href: "mailto:r2001hb@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      color: "hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/30"
    },
    {
      id: "whatsapp",
      label: t("contact.whatsapp"),
      value: "00967775964574",
      href: "https://wa.me/00967775964574",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "hover:bg-green-500/10 hover:text-green-500 hover:border-green-500/30"
    },
    {
      id: "github",
      label: t("contact.github"),
      value: "github.com/rahibgit",
      href: "https://github.com/rahibgit",
      icon: <Github className="w-6 h-6" />,
      color: "hover:bg-foreground/10 hover:text-foreground hover:border-foreground/30"
    }
  ];

  return (
    <Section id="contact" className="bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("contact.title")}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto bg-card rounded-3xl border border-border overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12 bg-primary text-primary-foreground relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10" />
            
            <h3 className="text-3xl font-bold mb-4">{t("contact.title")}</h3>
            <p className="text-primary-foreground/80 mb-8 max-w-sm">
              {t("hero.tagline")}
            </p>
            
            <div className="flex items-center space-x-4 rtl:space-x-reverse text-primary-foreground/90">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/60">Location</p>
                <p className="font-medium text-lg">Yemen</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
            {contactLinks.map((link, idx) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex items-center p-4 rounded-2xl border border-border bg-background transition-all duration-300 group ${link.color}`}
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground group-hover:bg-transparent transition-colors">
                  {link.icon}
                </div>
                <div className={`ml-4 ${isRtl ? 'mr-4 ml-0' : ''}`}>
                  <p className="text-sm text-muted-foreground group-hover:text-inherit transition-colors">
                    {link.label}
                  </p>
                  <p className="font-semibold text-foreground group-hover:text-inherit transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
