# Velusamy G — Professional Developer Portfolio

> **Modern, high-performance developer portfolio website for Velusamy G**, B.Tech Artificial Intelligence & Data Science Graduate, focusing on **Java, Spring Boot, Microservices, AI/ML, and Data Science**.

---

## 🌟 Key Highlights & Design Features

- **Developer Aesthetic**: Dark mode theme (`#090d16`), subtle ambient glow effects, responsive grid backgrounds, and glassmorphism.
- **Microservices Focus**: Prominent architecture showcase for **SkillSphere** with Eureka discovery, Spring Cloud API Gateway, and JWT security filters.
- **Explainable AI Integration**: Project deep dive into **Explainable Deep Q-Networks for NIDS** with SHAP & LIME interpretability.
- **Embedded IoT Safety**: Real-time driver fatigue & alcohol detection with ESP32-CAM and GSM SIM800C.
- **Categorized Skills**: Categorized into Programming, Backend, AI/ML, Databases, and Tools with interactive filter tabs.
- **Interactive Modals**: Detailed System Architecture / Case Study modal and a clean Printable/PDF Resume viewer.
- **GitHub Live Activity Grid**: Showcases repositories, contribution cadence, and language distribution for `VELUSAMY-22AIO56`.
- **Zero Build Overhead & 100% Offline/Online Ready**: Double-click `index.html` to run immediately in any modern browser, or deploy directly to GitHub Pages / Vercel / Netlify!

---

## 🚀 Quick Start & Deployment

### Option 1: Direct Browser Launch (Instant)
Simply open `index.html` in Chrome, Edge, Firefox, or Safari:
```bash
# In Windows PowerShell:
Start-Process .\index.html
```

### Option 2: Deploy to GitHub Pages
1. Push this repository to GitHub under username `VELUSAMY-22AIO56`.
2. Go to **Repository Settings** ➔ **Pages** ➔ Set branch to `main` and root to `/`.
3. Your portfolio will be live at: `https://VELUSAMY-22AIO56.github.io/portfolio`

---

## 📂 Project Structure

```
portfolio/
├── index.html                   # Main single-page web app with SEO metadata
├── src/
│   ├── app.js                   # Application logic, dynamic rendering, modals & toasts
│   ├── styles.css               # Design system tokens, glassmorphism, animations & print CSS
│   └── data/
│       └── portfolioData.ts     # Centralized TypeScript data store for easy updates
├── package.json                 # Standard React/TS build manifest
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration
└── README.md                    # Project documentation
```

---

## 📝 How to Update Information
All data (projects, skills, links, education, bio) is neatly centralized in [`src/app.js`](src/app.js) and [`src/data/portfolioData.ts`](src/data/portfolioData.ts). Simply modify the objects to update your portfolio!
