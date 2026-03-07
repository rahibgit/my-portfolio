# Rahib Al-Yousefi - Developer Portfolio

A modern, professional developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Modern UI & Animations:** Powered by Tailwind CSS & Framer Motion.
- **Dark/Light Mode:** Seamless theme switching.
- **Bilingual (i18n):** English and Arabic (RTL support).
- **Responsive Layout:** fully optimized for desktops, tablets, and mobile devices.
- **GitHub Integration:** Automatically fetches recent public repositories.
- **Sections:** Hero, About, Skills, Projects, Services, Contact.

## How to Run Locally

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Steps

1. **Install Dependencies**
   Navigate to the project folder and run:
   ```bash
   npm install
   ```

2. **Start the Development Server**
   Run the following command to start the Vite dev server:
   ```bash
   npm run dev
   ```

3. **View the Application**
   Open your browser and navigate to `http://localhost:5173`.

### Editing the Project

- Add your profile image in `src/components/sections/Hero.jsx` (replace the placeholder text layout with an `<img>` tag).
- Update links in `src/components/sections/Contact.jsx`.
- Update your GitHub username in `src/components/sections/Projects.jsx` if you ever change it.

## Build for Production

Run the build script to generate static assets:
```bash
npm run build
```
Once generated, the `dist/` folder will contain the production-ready code.
