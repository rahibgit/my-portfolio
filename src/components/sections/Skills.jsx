import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Code2, Smartphone, Wrench } from "lucide-react";
import Section from "../ui/Section";

const skillsData = [
  {
    category: "skills.frontend",
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    category: "skills.mobile",
    icon: <Smartphone className="w-8 h-8 text-teal-400" />,
    skills: ["Flutter", "Dart"],
  },
  {
    category: "skills.tools",
    icon: <Wrench className="w-8 h-8 text-purple-500" />,
    skills: ["Git", "GitHub", "Figma", "Firebase"],
  },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("skills.title")}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillsData.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="mb-8 flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mx-auto shadow-sm">
              {cat.icon}
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center">{t(cat.category)}</h3>
            <ul className="space-y-4">
              {cat.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center space-x-3 rtl:space-x-reverse font-medium">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400" />
                  <span className="text-foreground/90">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
