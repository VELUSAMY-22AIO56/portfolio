const PORTFOLIO_DATA = {
  personal: {
    name: "VELUSAMY G",
    role: "Java Developer | Software Engineer | AI/ML Graduate",
    tagline: "Passionate about building scalable software solutions and intelligent systems using Java, Spring Boot, Microservices, AI/ML, and modern development technologies.",
    availability: "Actively Seeking Full-Time Software Engineering Opportunities",
    graduationYear: 2026,
    college: "Nandha Engineering College",
    location: "Tamil Nadu, India",
    email: "velu2004.guru@gmail.com",
    githubUsername: "VELUSAMY-22AIO56",
    githubUrl: "https://github.com/VELUSAMY-22AIO56",
    linkedinUrl: "https://linkedin.com/in/velusamy-g",
    aboutBio: [
      "I am a B.Tech Artificial Intelligence & Data Science graduate from Nandha Engineering College, dedicated to building scalable backend systems, microservices architectures, and practical intelligent applications.",
      "My primary engineering focus centers on Java and Spring Boot for crafting robust, production-grade microservices and secure REST APIs. In parallel, I apply machine learning, deep learning, and Explainable AI (SHAP/LIME) to solve complex analytical and cybersecurity challenges.",
      "From designing distributed microservices with API Gateways and Eureka discovery to implementing real-time embedded safety devices, I enjoy solving real-world engineering problems with clean, modular, and maintainable code."
    ],
    stats: [
      { label: "Education", value: "B.Tech Graduate" },
      { label: "Core Stack", value: "Java & Spring" },
      { label: "Architecture", value: "Microservices" },
      { label: "AI Domain", value: "ML & XAI" }
    ]
  },

  skills: [
    {
      category: "programming",
      title: "Programming",
      icon: "code",
      accent: "from-blue-500/20 to-cyan-500/20",
      skills: [
        { name: "Java", level: "Advanced", tag: "Primary" },
        { name: "Python", level: "Advanced", tag: "AI/ML" },
        { name: "C", level: "Proficient", tag: "Systems" },
        { name: "C++", level: "Proficient", tag: "OOP" }
      ]
    },
    {
      category: "backend",
      title: "Backend & Architecture",
      icon: "server",
      accent: "from-emerald-500/20 to-teal-500/20",
      skills: [
        { name: "Spring Boot", level: "Advanced", tag: "Core" },
        { name: "Microservices", level: "Advanced", tag: "Cloud Native" },
        { name: "Spring Security", level: "Proficient", tag: "Auth / JWT" },
        { name: "REST APIs", level: "Advanced", tag: "Endpoints" },
        { name: "Hibernate / JPA", level: "Proficient", tag: "ORM" },
        { name: "JDBC", level: "Proficient", tag: "Database" }
      ]
    },
    {
      category: "ai-ml",
      title: "AI & Data Science",
      icon: "cpu",
      accent: "from-purple-500/20 to-indigo-500/20",
      skills: [
        { name: "Machine Learning", level: "Advanced", tag: "Core" },
        { name: "Deep Learning", level: "Proficient", tag: "Neural Nets" },
        { name: "TensorFlow", level: "Proficient", tag: "Framework" },
        { name: "PyTorch", level: "Proficient", tag: "Framework" },
        { name: "Scikit-learn", level: "Advanced", tag: "Pipelines" },
        { name: "Pandas & NumPy", level: "Advanced", tag: "Analysis" },
        { name: "SHAP", level: "Advanced", tag: "Explainable AI" },
        { name: "LIME", level: "Advanced", tag: "Explainable AI" }
      ]
    },
    {
      category: "databases",
      title: "Databases",
      icon: "database",
      accent: "from-cyan-500/20 to-blue-500/20",
      skills: [
        { name: "MySQL", level: "Advanced", tag: "RDBMS" },
        { name: "SQL", level: "Advanced", tag: "Queries & DDL" }
      ]
    },
    {
      category: "tools",
      title: "Developer Tools",
      icon: "wrench",
      accent: "from-amber-500/20 to-orange-500/20",
      skills: [
        { name: "Git", level: "Advanced", tag: "VCS" },
        { name: "GitHub", level: "Advanced", tag: "Collaboration" },
        { name: "Maven", level: "Proficient", tag: "Build Tool" },
        { name: "IntelliJ IDEA", level: "Advanced", tag: "IDE" },
        { name: "Eclipse", level: "Proficient", tag: "IDE" },
        { name: "Postman", level: "Advanced", tag: "API Testing" },
        { name: "Arduino IDE", level: "Proficient", tag: "Embedded" }
      ]
    }
  ],

  projects: [
    {
      id: "employee-management",
      title: "Employee Management System",
      subtitle: "Enterprise Management Platform with Spring Boot & REST APIs",
      category: "backend",
      isFeatured: true,
      highlightBadge: "Java & Spring Backend Showcase",
      badgeColor: "emerald",
      icon: "layers",
      description: "A robust enterprise employee and department management backend application architected with Java, Spring Boot, Spring Security, and MySQL database persistence.",
      longDescription: "Employee Management System is engineered to demonstrate production-grade backend principles using Java and Spring Boot. The system provides secure RESTful APIs for managing employees, department hierarchies, salaries, and roles. It incorporates comprehensive input validation, exception handling, JPA database relationships, and Postman API contract testing.",
      technologies: [
        "Java", "Spring Boot", "REST APIs", "Spring Security", "Hibernate / JPA", "MySQL", "Maven", "Postman"
      ],
      features: [
        "Complete CRUD lifecycle operations for employee and department data",
        "Role-Based Access Control (RBAC) and secure API endpoint authorization",
        "Dynamic pagination, sorting, and multi-field filtering capabilities",
        "Relational database schema modeling with Spring Data JPA and MySQL",
        "Global exception handling and structured JSON response formatting",
        "Extensive API contract verification with Postman collection testing"
      ],
      architectureSummary: "Client HTTP Requests ➔ Spring Boot REST Controllers (Validation) ➔ Service Layer (Business Logic) ➔ Spring Data JPA Repositories ➔ MySQL Database",
      architecturePoints: [
        "Layered Architecture: Clean separation of Concerns across Controllers, Service interfaces, and Data Access Layers.",
        "Data Validation: Jakarta Bean Validation constraints ensuring high data integrity at API boundaries.",
        "ORM Persistence: Hibernate JPA entity mappings with optimized transactional queries.",
        "REST Standards: Strict adherence to HTTP status codes, idempotent operations, and RESTful resource naming."
      ],
      githubUrl: "https://github.com/VELUSAMY-22AIO56/Employee-Management-System-Using-Spring",
      liveUrl: "#"
    },
    {
      id: "anti-sleep-driver",
      title: "Driver Anti-Sleep & Safety Device",
      subtitle: "Real-Time Embedded Driver Safety & Alcohol Hazard System",
      category: "embedded",
      isFeatured: true,
      highlightBadge: "Embedded IoT & Safety",
      badgeColor: "cyan",
      icon: "radio",
      description: "A real-time vehicular safety system using ESP32-CAM and MQ-3 sensor that detects driver drowsiness and alcohol presence, triggering immediate acoustic, tactile, LCD, and GSM SMS alerts.",
      longDescription: "An edge computing and IoT hardware device designed for vehicular accident prevention. The module utilizes an ESP32-CAM optical sensor for real-time eye-closure and facial fatigue monitoring alongside an MQ-3 electrochemical sensor for in-cabin alcohol vapor detection. When dangerous fatigue or intoxication thresholds are met, the system activates buzzers, a vibration motor, outputs telemetry to a 16x2 LCD, and dispatches automated SMS alerts via a SIM800C GSM module.",
      technologies: [
        "ESP32", "ESP32-CAM", "GSM SIM800C", "MQ-3 Sensor", "Arduino IDE", "LCD 16x2", "Buzzer", "Vibration Motor", "C/C++"
      ],
      features: [
        "Real-time driver drowsiness detection via ESP32-CAM optical feedback",
        "Electrochemical alcohol vapor detection via MQ-3 sensor",
        "Multi-stage alert system: High-decibel buzzer & tactile seat vibration",
        "Automated GSM SMS emergency alerts with vehicle status",
        "Instant telemetry readout on 16x2 I2C LCD screen",
        "Ignition cutoff relay mechanism for proactive accident avoidance"
      ],
      architectureSummary: "ESP32-CAM (Vision) + MQ-3 (Alcohol Sensor) ➔ Edge Microcontroller Logic ➔ Buzzer/Vibration Alert + LCD Output + SIM800C GSM SMS Dispatch",
      architecturePoints: [
        "Edge Processing: ESP32 processes frame differences and eye aspect ratios with low latency.",
        "Multi-Sensor Fusion: Continuous polling of analog alcohol threshold values and optical indicators.",
        "Telemetry & Telephony: SIM800C executes AT commands to immediately broadcast warning messages.",
        "Active Safety: Integrates an ignition lockout relay to prevent driving under unsafe conditions."
      ],
      githubUrl: "https://github.com/VELUSAMY-22AIO56/DRIVER-ANTI-SLEEP-DEVICE-",
      liveUrl: "#"
    }
  ],

  experience: [
    {
      title: "Software Development Training",
      role: "Hands-on Software Development & Backend Engineering",
      period: "Core Technical Preparation & Practical Projects",
      focus: "Java, Spring Boot, Microservices, REST APIs, SQL, Hibernate",
      description: "Comprehensive hands-on software development training focused on enterprise backend systems, modern software architecture, database management, and industry-standard developer workflows.",
      highlights: [
        "Engineered end-to-end RESTful APIs with Spring Boot, ensuring clean resource naming, status codes, and input validations.",
        "Implemented secure authentication and authorization flows utilizing Spring Security, JWT (JSON Web Tokens), and RBAC.",
        "Designed decoupled microservices with Netflix Eureka discovery, Spring Cloud API Gateway, and resilient inter-service REST calls.",
        "Modeled relational database schemas, crafted optimized SQL queries, and mapped domain entities using Hibernate/JPA and JDBC.",
        "Practiced clean coding standards, Git version control, branch management, collaborative pull requests, and Postman API contract testing."
      ],
      technologies: [
        "Java", "Spring Boot", "Spring Security", "Microservices", "REST APIs", "SQL", "Hibernate/JPA", "Git & GitHub", "Postman"
      ]
    }
  ],

  education: [
    {
      degree: "B.Tech — Artificial Intelligence & Data Science",
      institution: "Nandha Engineering College",
      location: "Erode, Tamil Nadu",
      period: "2022 – 2026",
      status: "Graduated",
      description: "Rigorous academic curriculum covering core software engineering, object-oriented programming, data structures, database management systems, and applied machine learning.",
      coursework: [
        "Java Programming & OOP",
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Machine Learning & Deep Learning",
        "Artificial Intelligence & Problem Solving",
        "Software Engineering Principles"
      ]
    }
  ],

  achievements: [
    {
      id: "1",
      title: "AI/ML Project Development",
      category: "Artificial Intelligence",
      description: "Engineered deep learning, feature engineering pipelines, and reinforcement learning models for predictive intelligence.",
      icon: "cpu",
      tag: "AI & ML"
    },
    {
      id: "2",
      title: "Embedded Safety & IoT Systems Engineering",
      category: "Embedded IoT & Hardware",
      description: "Engineered real-time edge driver drowsiness and alcohol detection systems integrating ESP32-CAM and SIM800C GSM alerts.",
      icon: "radio",
      tag: "Embedded IoT"
    },
    {
      id: "3",
      title: "Microservices Application Development",
      category: "Backend Architecture",
      description: "Designed decoupled microservices with API Gateway routing, Eureka service registry, and JWT-secured REST APIs.",
      icon: "layers",
      tag: "Microservices"
    },
    {
      id: "4",
      title: "Hands-on Java Backend Development",
      category: "Enterprise Java",
      description: "Built robust backend services using Spring Boot, Hibernate ORM, and MySQL with production-oriented design patterns.",
      icon: "code-2",
      tag: "Java / Spring Boot"
    },
    {
      id: "5",
      title: "GitHub Collaborative Development",
      category: "Version Control",
      description: "Active contributor maintaining clean Git commit histories, organized repository structures, and documentation.",
      icon: "git-branch",
      tag: "Git & GitHub"
    },
    {
      id: "6",
      title: "Technical Training & Placement Preparation",
      category: "Software Engineering",
      description: "Comprehensive problem solving across data structures, system design fundamentals, and technical interview readiness.",
      icon: "check-circle-2",
      tag: "Placement Ready"
    }
  ],

  github: {
    username: "VELUSAMY-22AIO56",
    profileUrl: "https://github.com/VELUSAMY-22AIO56",
    headline: "Building. Learning. Shipping.",
    repositories: [
      {
        name: "Employee-Management-System-Using-Spring",
        description: "Enterprise employee management backend application with Spring Boot, Spring Security, JPA & REST APIs.",
        language: "Java",
        languageColor: "#f97316",
        stars: 12,
        forks: 4,
        url: "https://github.com/VELUSAMY-22AIO56/Employee-Management-System-Using-Spring"
      },
      {
        name: "DRIVER-ANTI-SLEEP-DEVICE-",
        description: "Real-time driver drowsiness and alcohol detection system with ESP32-CAM and SIM800C GSM alerts.",
        language: "C++",
        languageColor: "#ec4899",
        stars: 9,
        forks: 2,
        url: "https://github.com/VELUSAMY-22AIO56/DRIVER-ANTI-SLEEP-DEVICE-"
      }
    ],
    techBreakdown: [
      { name: "Java / Spring Boot", percentage: 45, color: "#f97316" },
      { name: "Python / AI / ML", percentage: 35, color: "#3b82f6" },
      { name: "SQL & Databases", percentage: 12, color: "#10b981" },
      { name: "C / C++ & Embedded", percentage: 8, color: "#8b5cf6" }
    ]
  }
};

// Initialize Application UI
document.addEventListener('DOMContentLoaded', () => {
  renderPersonalHero();
  renderAboutSection();
  renderSkills('all');
  renderSkillTabs();
  renderProjects();
  renderExperience();
  renderEducation();
  renderAchievements();
  renderGitHubSection();
  setupNavigation();
  setupContactForm();
  setupResumeModal();
  setupProjectModal();
  setupScrollSpy();
  initHeroInteractiveCanvas();
  initLiveTelemetryFeed();
  init3DCardParallax();
  lucide.createIcons();
});

function renderPersonalHero() {
  // Stats rendering in About or Hero
  const statsContainer = document.getElementById('hero-quick-stats');
  if (statsContainer) {
    statsContainer.innerHTML = PORTFOLIO_DATA.personal.stats.map(s => `
      <div class="glass-panel px-4 py-3 rounded-xl border border-slate-800/80 bg-slate-900/40">
        <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">${s.label}</p>
        <p class="text-sm font-semibold text-slate-200 mt-0.5">${s.value}</p>
      </div>
    `).join('');
  }
}

function renderAboutSection() {
  const bioContainer = document.getElementById('about-bio-container');
  if (bioContainer) {
    bioContainer.innerHTML = PORTFOLIO_DATA.personal.aboutBio.map(paragraph => `
      <p class="text-slate-300 leading-relaxed text-base">${paragraph}</p>
    `).join('');
  }
}

function renderSkillTabs() {
  const tabContainer = document.getElementById('skill-filter-tabs');
  if (!tabContainer) return;

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'backend', label: 'Backend & Microservices' },
    { id: 'ai-ml', label: 'AI & Data Science' },
    { id: 'programming', label: 'Programming' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Developer Tools' }
  ];

  tabContainer.innerHTML = categories.map((c, i) => `
    <button 
      onclick="filterSkills('${c.id}')" 
      data-category="${c.id}"
      class="skill-tab-btn px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
        i === 0 
          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' 
          : 'bg-slate-900/50 text-slate-400 border border-slate-800/60 hover:text-slate-200 hover:border-slate-700'
      }">
      ${c.label}
    </button>
  `).join('');
}

window.filterSkills = function(category) {
  // Update active tab styling
  document.querySelectorAll('.skill-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-category') === category) {
      btn.className = 'skill-tab-btn px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30';
    } else {
      btn.className = 'skill-tab-btn px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 bg-slate-900/50 text-slate-400 border border-slate-800/60 hover:text-slate-200 hover:border-slate-700';
    }
  });
  renderSkills(category);
};

function renderSkills(filterCategory = 'all') {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  const filteredCategories = filterCategory === 'all' 
    ? PORTFOLIO_DATA.skills 
    : PORTFOLIO_DATA.skills.filter(cat => cat.category === filterCategory);

  container.innerHTML = filteredCategories.map(cat => `
    <div class="glow-card glass-panel rounded-2xl p-6 border border-slate-800/80 bg-slate-900/50 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-5">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${cat.accent} flex items-center justify-center border border-slate-700/40 text-cyan-400">
              <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
            </div>
            <h3 class="font-semibold text-lg text-slate-100">${cat.title}</h3>
          </div>
          <span class="text-xs font-mono-code text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/50">${cat.skills.length} skills</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${cat.skills.map(skill => `
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/50 hover:border-cyan-500/30 hover:bg-slate-800/30 transition-colors">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                <span class="text-sm font-medium text-slate-200">${skill.name}</span>
              </div>
              <span class="text-[11px] font-mono-code text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                ${skill.level}
              </span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map((project, index) => {
    const isBackend = project.id === 'employee-management';
    return `
    <div class="glow-card glass-panel rounded-2xl border ${isBackend ? 'border-emerald-500/30 bg-slate-900/60 ring-1 ring-emerald-500/20' : 'border-slate-800/80 bg-slate-900/40'} p-6 md:p-8 flex flex-col justify-between transition-all duration-300">
      <div>
        <!-- Card Header Badges -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 text-xs font-medium font-mono-code rounded-full ${
              project.badgeColor === 'emerald' 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                : project.badgeColor === 'purple'
                ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
            }">
              ${project.highlightBadge}
            </span>
            ${isBackend ? '<span class="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 px-2.5 py-0.5 rounded-full"><i data-lucide="sparkles" class="w-3 h-3"></i> Core Backend</span>' : ''}
          </div>
          <span class="text-xs font-mono-code text-slate-500">Project 0${index + 1}</span>
        </div>

        <!-- Project Title Linked to GitHub -->
        <h3 class="text-xl md:text-2xl font-bold text-slate-100 mb-1">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors inline-flex items-center gap-2">
            <span>${project.title}</span>
            <i data-lucide="external-link" class="w-4 h-4 text-slate-500 hover:text-cyan-400 shrink-0"></i>
          </a>
        </h3>
        <p class="text-sm font-medium text-cyan-400/90 mt-1 mb-4 font-mono-code">
          ${project.subtitle}
        </p>

        <p class="text-slate-300 text-sm leading-relaxed mb-6">
          ${project.description}
        </p>

        <!-- Key Features List -->
        <div class="mb-6 space-y-2">
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono-code mb-2">Key Engineering Highlights</p>
          ${project.features.slice(0, 4).map(f => `
            <div class="flex items-start gap-2.5 text-xs text-slate-300">
              <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"></i>
              <span>${f}</span>
            </div>
          `).join('')}
        </div>

        <!-- Tech Stack Badges -->
        <div class="flex flex-wrap gap-1.5 mb-6">
          ${project.technologies.map(t => `
            <span class="text-xs font-mono-code px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-800 text-slate-300">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Card Action Buttons -->
      <div class="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white px-3.5 py-2 rounded-lg border border-slate-700/60 transition-colors">
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
            <span>GitHub Repo</span>
          </a>
          <button onclick="openProjectModal('${project.id}')"
             class="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 px-3.5 py-2 rounded-lg border border-cyan-800/50 transition-colors">
            <i data-lucide="info" class="w-3.5 h-3.5"></i>
            <span>Case Study</span>
          </button>
        </div>
        <button onclick="openProjectModal('${project.id}')" class="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors font-medium">
          <span>System Details</span>
          <i data-lucide="arrow-right" class="w-3 h-3"></i>
        </button>
      </div>
    </div>
    `;
  }).join('');

  lucide.createIcons();
}

function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="relative pl-8 pb-4">
      <div class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center">
        <div class="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
      </div>
      
      <div class="glass-panel rounded-2xl p-6 md:p-7 border border-slate-800/80 bg-slate-900/50">
        <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 class="text-lg font-bold text-slate-100">${exp.title}</h3>
            <p class="text-cyan-400 font-mono-code text-xs font-medium">${exp.focus}</p>
          </div>
          <span class="text-xs font-mono-code px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
            ${exp.period}
          </span>
        </div>

        <p class="text-slate-300 text-sm leading-relaxed mb-5">${exp.description}</p>

        <div class="space-y-2.5 mb-5">
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono-code">Practical Competencies Applied</p>
          ${exp.highlights.map(h => `
            <div class="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
              <i data-lucide="check-circle" class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5"></i>
              <span>${h}</span>
            </div>
          `).join('')}
        </div>

        <div class="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
          ${exp.technologies.map(t => `
            <span class="text-[11px] font-mono-code px-2 py-0.5 rounded bg-slate-950/70 border border-slate-800 text-slate-400">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function renderEducation() {
  const container = document.getElementById('education-timeline');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.education.map(edu => `
    <div class="relative pl-8 pb-4">
      <div class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center">
        <div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
      </div>

      <div class="glass-panel rounded-2xl p-6 md:p-7 border border-slate-800/80 bg-slate-900/50">
        <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 class="text-lg font-bold text-slate-100">${edu.degree}</h3>
            <p class="text-emerald-400 font-medium text-sm flex items-center gap-1.5 mt-0.5">
              <i data-lucide="graduation-cap" class="w-4 h-4"></i>
              <span>${edu.institution}</span>
              <span class="text-slate-500">•</span>
              <span class="text-slate-400 text-xs font-normal">${edu.location}</span>
            </p>
          </div>
          <span class="text-xs font-mono-code px-2.5 py-1 rounded-full bg-emerald-950/40 text-emerald-300 border border-emerald-800/50">
            ${edu.period} (${edu.status})
          </span>
        </div>

        <p class="text-slate-300 text-sm leading-relaxed mb-4 mt-3">${edu.description}</p>

        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono-code mb-2">Key Coursework Areas</p>
          <div class="flex flex-wrap gap-2">
            ${edu.coursework.map(c => `
              <span class="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-800 text-slate-300">
                ${c}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function renderAchievements() {
  const container = document.getElementById('achievements-grid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.achievements.map(item => `
    <div class="glow-card glass-panel rounded-xl p-5 border border-slate-800/80 bg-slate-900/40 hover:border-cyan-500/30 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <div class="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <i data-lucide="${item.icon}" class="w-4 h-4"></i>
          </div>
          <span class="text-[11px] font-mono-code px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">
            ${item.tag}
          </span>
        </div>
        <h4 class="font-semibold text-slate-200 text-sm mb-1.5">${item.title}</h4>
        <p class="text-xs text-slate-400 leading-relaxed">${item.description}</p>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function renderGitHubSection() {
  const reposContainer = document.getElementById('github-repos-grid');
  const techStatsContainer = document.getElementById('github-tech-breakdown');
  
  if (reposContainer) {
    reposContainer.innerHTML = PORTFOLIO_DATA.github.repositories.map(repo => `
      <a href="${repo.url}" target="_blank" rel="noopener noreferrer" 
         class="glass-panel p-4 rounded-xl border border-slate-800/80 bg-slate-950/40 hover:border-slate-700 hover:bg-slate-900/60 transition-all block group">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <i data-lucide="folder-git-2" class="w-4 h-4 text-cyan-400 group-hover:text-cyan-300"></i>
            <h4 class="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors font-mono-code">${repo.name}</h4>
          </div>
          <i data-lucide="external-link" class="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300"></i>
        </div>
        <p class="text-xs text-slate-400 line-clamp-2 mb-3 leading-relaxed">${repo.description}</p>
        <div class="flex items-center justify-between text-xs text-slate-500 font-mono-code">
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full" style="background-color: ${repo.languageColor}"></span>
            <span class="text-slate-300">${repo.language}</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="flex items-center gap-1"><i data-lucide="star" class="w-3 h-3"></i> ${repo.stars}</span>
            <span class="flex items-center gap-1"><i data-lucide="git-fork" class="w-3 h-3"></i> ${repo.forks}</span>
          </div>
        </div>
      </a>
    `).join('');
  }

  if (techStatsContainer) {
    techStatsContainer.innerHTML = `
      <div class="space-y-3">
        <div class="flex h-2.5 rounded-full overflow-hidden bg-slate-950 border border-slate-800">
          ${PORTFOLIO_DATA.github.techBreakdown.map(t => `
            <div style="width: ${t.percentage}%; background-color: ${t.color}" title="${t.name}: ${t.percentage}%"></div>
          `).join('')}
        </div>
        <div class="grid grid-cols-2 gap-2 text-xs font-mono-code">
          ${PORTFOLIO_DATA.github.techBreakdown.map(t => `
            <div class="flex items-center justify-between p-2 rounded bg-slate-950/40 border border-slate-800/40">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full" style="background-color: ${t.color}"></span>
                <span class="text-slate-300">${t.name}</span>
              </div>
              <span class="text-slate-400 font-semibold">${t.percentage}%</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Render contribution-style grid dots (simulated live GitHub activity heatmap)
  const heatmapContainer = document.getElementById('github-heatmap-grid');
  if (heatmapContainer) {
    const totalDays = 52 * 4; // 4 rows x 52 weeks
    let dotsHtml = '';
    const shades = ['bg-slate-900/60', 'bg-emerald-950', 'bg-emerald-700', 'bg-emerald-500', 'bg-emerald-400'];
    
    for (let i = 0; i < 160; i++) {
      // Deterministic random pattern
      const rand = (Math.sin(i * 997) + 1) / 2;
      const shadeIndex = rand > 0.8 ? 4 : rand > 0.6 ? 3 : rand > 0.4 ? 2 : rand > 0.2 ? 1 : 0;
      dotsHtml += `<div class="w-2.5 h-2.5 rounded-sm ${shades[shadeIndex]}" title="Activity Level: ${shadeIndex}"></div>`;
    }
    heatmapContainer.innerHTML = dotsHtml;
  }

  lucide.createIcons();
}

function setupNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav-dropdown');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    // Close mobile nav when clicking any link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
      });
    });
  }

  // Floating Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-cyan-400', 'bg-cyan-500/10');
      link.classList.add('text-slate-300');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-cyan-400', 'bg-cyan-500/10');
        link.classList.remove('text-slate-300');
      }
    });
  });
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Simulate sending state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="inline-flex items-center gap-2">
        <svg class="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span>Sending Message...</span>
      </span>
    `;

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showToast("Thank you! Your message has been sent successfully. Velusamy will get in touch with you shortly.");
    }, 1200);
  });
}

function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 border border-cyan-500/40 text-slate-100 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-lg flex items-center gap-3 transform transition-all duration-300 translate-y-20 opacity-0';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
      <i data-lucide="check-circle" class="w-4 h-4"></i>
    </div>
    <div class="text-xs text-slate-200">${message}</div>
  `;
  lucide.createIcons();

  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 4000);
}

// Copy email to clipboard utility
window.copyEmailToClipboard = function() {
  const email = PORTFOLIO_DATA.personal.email;
  navigator.clipboard.writeText(email).then(() => {
    showToast(`Email copied to clipboard: ${email}`);
  }).catch(() => {
    showToast(`Contact: ${email}`);
  });
};

function setupResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (!modal) return;

  window.openResumeModal = function() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
  };

  window.closeResumeModal = function() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  };

  window.printResume = function() {
    window.print();
  };

  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      window.closeResumeModal();
    }
  });
}

function setupProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  window.openProjectModal = function(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    const modalContent = document.getElementById('project-modal-content');
    if (modalContent) {
      modalContent.innerHTML = `
        <div class="p-6 md:p-8">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-mono-code px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              ${project.highlightBadge}
            </span>
            <button onclick="closeProjectModal()" class="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <h2 class="text-2xl font-bold text-slate-100 mb-1">${project.title}</h2>
          <p class="text-sm font-mono-code text-cyan-400 mb-5">${project.subtitle}</p>

          <div class="space-y-6 text-sm text-slate-300">
            <div>
              <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono-code mb-2">Project Overview</h4>
              <p class="leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800">${project.longDescription}</p>
            </div>

            <div>
              <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono-code mb-2">System Architecture & Workflow</h4>
              <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 font-mono-code text-xs text-cyan-300 mb-3">
                ${project.architectureSummary}
              </div>
              <ul class="space-y-2 text-xs">
                ${project.architecturePoints.map(pt => `
                  <li class="flex items-start gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                    <span>${pt}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div>
              <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono-code mb-2">Technologies Used</h4>
              <div class="flex flex-wrap gap-2">
                ${project.technologies.map(t => `
                  <span class="text-xs font-mono-code px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200">
                    ${t}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium px-4 py-2.5 rounded-lg border border-slate-700 transition-colors">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
              <span>View Repository</span>
            </a>
            <button onclick="closeProjectModal()" class="text-xs text-slate-400 hover:text-white px-4 py-2">
              Close
            </button>
          </div>
        </div>
      `;
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
  };

  window.closeProjectModal = function() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  };

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      window.closeProjectModal();
    }
  });
}

// ----------------------------------------------------
// Interactive Animations: Canvas Particle Constellation
// ----------------------------------------------------
function initHeroInteractiveCanvas() {
  const canvas = document.getElementById('hero-particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.offsetWidth);
  let height = (canvas.height = canvas.offsetHeight);

  window.addEventListener('resize', () => {
    if (!canvas) return;
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  });

  const particles = [];
  const particleCount = 28;
  const maxDistance = 75;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 1.8 + 1,
      color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#10b981' : '#6366f1'
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(6, 182, 212, ${(1 - dist / maxDistance) * 0.35})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw and move particles
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    });

    requestAnimationFrame(render);
  }

  render();
}

// ----------------------------------------------------
// Interactive Live Telemetry Feed (Typewriter Animation)
// ----------------------------------------------------
function initLiveTelemetryFeed() {
  const feedEl = document.getElementById('live-telemetry-feed');
  if (!feedEl) return;

  const logs = [
    "> [JAVA] Spring Boot Microservices: Eureka Synced",
    "> [SECURITY] Spring Security JWT: Stateless Auth Active",
    "> [AI/ML] Deep Q-Network NIDS: Real-time Attack Classifier",
    "> [XAI] SHAP & LIME Interpretability: Explanations Online",
    "> [DATABASE] MySQL & Hibernate JPA: Queries Optimized",
    "> [STATUS] Open to Software Engineering Opportunities"
  ];

  let logIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentLog = logs[0];

  function typeStep() {
    if (!feedEl) return;

    if (!isDeleting) {
      feedEl.textContent = currentLog.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentLog.length) {
        isDeleting = true;
        setTimeout(typeStep, 2200); // Pause before delete
        return;
      }
      setTimeout(typeStep, 35);
    } else {
      feedEl.textContent = currentLog.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        logIndex = (logIndex + 1) % logs.length;
        currentLog = logs[logIndex];
        setTimeout(typeStep, 400); // Pause before next line
        return;
      }
      setTimeout(typeStep, 15);
    }
  }

  typeStep();
}

// ----------------------------------------------------
// Interactive 3D Card Parallax Tilt on Mouse Move
// ----------------------------------------------------
function init3DCardParallax() {
  const card = document.getElementById('hero-interactive-card');
  if (!card) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltX = (y / (rect.height / 2)) * -6; // max 6 deg
    const tiltY = (x / (rect.width / 2)) * 6;

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

