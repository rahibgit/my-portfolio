import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import { cn } from "../../lib/utils";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50 -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col space-y-6 text-center lg:text-start"
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary">
              {t("hero.greeting")}
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold font-sans">
              <span className="block mb-2 text-foreground">Rahib</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Al-Yousefi
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground flex flex-wrap gap-2 justify-center lg:justify-start">
              <span>{t("hero.role.programmer")}</span>
              <span className="hidden sm:inline">•</span>
              <span>{t("hero.role.frontend")}</span>
              <span className="hidden sm:inline">•</span>
              <span>{t("hero.role.flutter")}</span>
            </div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              {t("hero.tagline")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="group cursor-pointer flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                {t("hero.viewProjects")}
                <ArrowRight className={cn("ml-2 w-5 h-5 transition-transform group-hover:translate-x-1", isRtl && "mr-2 ml-0 rotate-180 group-hover:-translate-x-1")} />
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="group cursor-pointer flex items-center justify-center px-8 py-3 rounded-full border border-border bg-secondary hover:bg-secondary/80 text-foreground font-medium transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                {t("hero.contactMe")}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center items-center lg:justify-end"
          >
            {/* You can control the width and height here by changing w-64 h-64 (mobile) and md:w-80 md:h-80 (desktop) */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-blue-500 to-teal-400 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-teal-400 blur-xl opacity-50 rounded-full animate-pulse"></div>
              <div className="w-full h-full rounded-full overflow-hidden bg-background border-4 border-background z-10 flex items-center justify-center text-muted-foreground">
                <img
                  src="/profile.jpg"
                  alt="Rahib Al-Yousefi"
                  className="w-full h-full object-cover rounded-full bg-background z-10 scale-[1.15] object-top"
                />

              </div>

            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
