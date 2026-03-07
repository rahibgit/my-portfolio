import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import Section from "../ui/Section";

export default function Projects() {
  const { t } = useTranslation();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/rahibgit/repos?sort=updated&per_page=6")
      .then((res) => res.json())
      .then((data) => {
        if(Array.isArray(data)) {
          // Filter out forks if preferred
          const filtered = data.filter(repo => !repo.fork).slice(0, 6);
          setRepos(filtered);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch repos", err);
        setLoading(false);
      });
  }, []);

  return (
    <Section id="projects" className="bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("projects.title")}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, idx) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background flex flex-col h-full border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-500/50 transition-all group"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-blue-500 transition-colors line-clamp-1">
                    {repo.name}
                  </h3>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground text-sm">
                    <span className="flex items-center gap-1"><Star className="w-4 h-4" />{repo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><GitFork className="w-4 h-4" />{repo.forks_count}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {repo.description || "No description provided."}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {repo.language && (
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics?.slice(0, 3).map(topic => (
                    <span key={topic} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 rtl:space-x-reverse mt-auto pt-4 border-t border-border">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-sm font-medium hover:text-blue-500 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                    {t("projects.viewGithub")}
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-sm font-medium hover:text-teal-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                      {t("projects.liveDemo")}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </Section>
  );
}
