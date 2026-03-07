import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "hero.greeting": "Hello, I'm",
      "hero.role.programmer": "Programmer",
      "hero.role.frontend": "Frontend Developer",
      "hero.role.flutter": "Flutter Developer",
      "hero.tagline": "Specializing in creating exceptional user experiences across web and mobile platforms.",
      "hero.viewProjects": "View Projects",
      "hero.contactMe": "Contact Me",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.services": "Services",
      "nav.contact": "Contact",
      "about.title": "About Me",
      "about.p1": "Hello! I am Rahib Al-Yousefi, a frontend and backend developer. I specialize in creating exceptional user experiences across web and mobile platforms. Thanks to my great passion for modern technologies, I combine strong performance with the aesthetic design of interfaces.",
      "about.p2": "My experience includes building cross-platform smartphone applications using Flutter and Dart, and developing interactive web applications using React.js and advanced web standards.",
      "skills.title": "My Skills",
      "skills.frontend": "Frontend",
      "skills.mobile": "Mobile Development",
      "skills.tools": "Tools & Technologies",
      "projects.title": "Featured Projects",
      "projects.viewGithub": "View on GitHub",
      "projects.liveDemo": "Live Demo",
      "contact.title": "Get In Touch",
      "contact.email": "Email",
      "contact.whatsapp": "WhatsApp",
      "contact.github": "GitHub",
      "footer.rights": "© 2026 Rahib Al-Yousefi. All rights reserved.",
      "services.web.title": "Web Development",
      "services.web.desc": "Building responsive, modern and high-performance web applications using React and latest web standards.",
      "services.mobile.title": "Mobile Development",
      "services.mobile.desc": "Creating cross-platform mobile apps for iOS and Android using Flutter with native-like performance.",
      "services.ui.title": "UI/UX Design Integration",
      "services.ui.desc": "Translating Figma designs into pixel-perfect, interactive and accessible frontend code."
    }
  },
  ar: {
    translation: {
      "hero.greeting": "مرحباً، أنا",
      "hero.role.programmer": "مبرمج",
      "hero.role.frontend": "مطور واجهات أمامية",
      "hero.role.flutter": "مطور فلاتر",
      "hero.tagline": "متخصص في صناعة تجارب مستخدم مميزة عبر منصات الويب والموبايل.",
      "hero.viewProjects": "شاهد أعمالي",
      "hero.contactMe": "تواصل معي",
      "nav.about": "من أنا",
      "nav.skills": "مهاراتي",
      "nav.projects": "المشاريع",
      "nav.services": "الخدمات",
      "nav.contact": "اتصل بي",
      "about.title": "نبذة عني",
      "about.p1": "مرحباً! أنا رهيب اليوسفي، مطور واجهات أمامية وخلفية. أتخصص في صناعة تجارب مستخدم مميزة عبر منصات الويب والموبايل. بفضل شغفي الكبير بالتقنيات الحديثة، أجمع بين الأداء القوي والتصميم الجمالي للواجهات.",
      "about.p2": "تشمل خبرتي بناء تطبيقات هواتف ذكية متقاطعة المنصات باستخدام Flutter و Dart، وتطوير تطبيقات ويب تفاعلية باستخدام React.js ومعايير الويب المتقدمة.",
      "skills.title": "المهارات التقنية",
      "skills.frontend": "الواجهات الأمامية",
      "skills.mobile": "تطوير الموبايل",
      "skills.tools": "الأدوات والتقنيات",
      "projects.title": "أبرز المشاريع",
      "projects.viewGithub": "عرض على GitHub",
      "projects.liveDemo": "معاينة حية",
      "contact.title": "تواصل معي",
      "contact.email": "البريد الإلكتروني",
      "contact.whatsapp": "واتساب",
      "contact.github": "جيت هب",
      "footer.rights": "© 2026 رهيب اليوسفي. جميع الحقوق محفوظة.",
      "services.web.title": "تطوير الويب",
      "services.web.desc": "بناء تطبيقات ويب متجاوبة وحديثة وعالية الأداء باستخدام React وأحدث معايير الويب.",
      "services.mobile.title": "تطوير تطبيقات الموبايل",
      "services.mobile.desc": "إنشاء تطبيقات موبايل متقاطعة المنصات لنظامي iOS و Android باستخدام Flutter بأداء يضاهي التطبيقات الأصلية.",
      "services.ui.title": "تكامل واجهات المستخدم",
      "services.ui.desc": "تحويل تصميمات Figma إلى كود واجهة أمامية مثالي وتفاعلي يدعم الوصول."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;
