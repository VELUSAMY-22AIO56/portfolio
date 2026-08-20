export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai-ml' | 'backend' | 'embedded';
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  architecturePoints: string[];
  metrics?: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  badge?: string;
  isFeatured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: 'Advanced' | 'Proficient' | 'Familiar'; icon?: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  location: string;
  description: string;
  coursework: string[];
}

export interface ExperienceItem {
  title: string;
  role: string;
  period: string;
  focus: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  tag: string;
}

export const PORTFOLIO_DATA = {
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
      "I am a B.Tech Artificial Intelligence & Data Science graduate from Nandha Engineering College, with a deep passion for modern software engineering, scalable backend architecture, and applied machine learning.",
      "My core technical foundation is built around Java, Spring Boot, and Microservices architectures, alongside machine learning and deep learning pipelines. I focus on developing clean, testable, and maintainable software systems that solve real-world problems.",
      "Whether designing distributed microservices with Spring Cloud, training explainable deep reinforcement learning models for cybersecurity, or building IoT-integrated safety devices, I enjoy translating complex technical concepts into robust, production-ready solutions."
    ],
    stats: [
      { label: "Education", value: "B.Tech Graduate" },
      { label: "Core Focus", value: "Java & Microservices" },
      { label: "AI Domain", value: "Applied ML & XAI" },
      { label: "Status", value: "Available for Hire" }
    ]
  },

  skills: [
    {
      title: "Programming Languages",
      icon: "code",
      skills: [
        { name: "Java", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "C", level: "Proficient" },
        { name: "C++", level: "Proficient" }
      ]
    },
    {
      title: "Backend & Microservices",
      icon: "server",
      skills: [
        { name: "Spring Boot", level: "Advanced" },
        { name: "Microservices", level: "Advanced" },
        { name: "Spring Security", level: "Proficient" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Hibernate / JPA", level: "Proficient" },
        { name: "JDBC", level: "Proficient" }
      ]
    },
    {
      title: "AI & Data Science",
      icon: "brain",
      skills: [
        { name: "Machine Learning", level: "Advanced" },
        { name: "Deep Learning", level: "Proficient" },
        { name: "TensorFlow", level: "Proficient" },
        { name: "PyTorch", level: "Proficient" },
        { name: "Scikit-learn", level: "Advanced" },
        { name: "Pandas & NumPy", level: "Advanced" },
        { name: "SHAP (Explainable AI)", level: "Advanced" },
        { name: "LIME (Explainable AI)", level: "Advanced" }
      ]
    },
    {
      title: "Databases",
      icon: "database",
      skills: [
        { name: "MySQL", level: "Advanced" },
        { name: "SQL", level: "Advanced" }
      ]
    },
    {
      title: "Developer Tools",
      icon: "wrench",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "Maven", level: "Proficient" },
        { name: "IntelliJ IDEA", level: "Advanced" },
        { name: "Eclipse", level: "Proficient" },
        { name: "Postman", level: "Advanced" },
        { name: "Arduino IDE", level: "Proficient" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "skillsphere",
      title: "SkillSphere",
      subtitle: "Enterprise Skill & Learning Management Microservices Platform",
      category: "backend",
      isFeatured: true,
      badge: "Backend & Microservices Spotlight",
      description: "A modern, distributed learning and skill management platform architected using Java and Spring Boot Microservices with Spring Cloud Gateway, Eureka discovery, and JWT-secured RESTful endpoints.",
      longDescription: "SkillSphere is built from the ground up as a cloud-native microservices architecture designed to decouple user management, skill catalogs, and examination engines. It features centralized authentication with Spring Security and JWT, an API Gateway for routing and rate-limiting, dynamic service registration using Netflix Eureka, and database persistence through Spring Data JPA with MySQL.",
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "Spring Security",
        "JWT",
        "API Gateway",
        "Eureka",
        "MySQL",
        "Maven"
      ],
      features: [
        "Stateless Authentication & Role-Based Access Control (RBAC) with JWT tokens",
        "Decoupled User Management and Profile Service",
        "Skill, Course, and Curriculum Management Service",
        "Interactive Examination & Automated Assessment Evaluation Module",
        "Spring Cloud API Gateway for unified routing and security filtering",
        "Service Discovery & Dynamic Health Registry with Netflix Eureka",
        "Inter-service REST communication with resilient error handling"
      ],
      architecturePoints: [
        "Client Request -> Spring Cloud API Gateway (JWT Validation & Route Filtering)",
        "Eureka Service Discovery dynamically discovers registered backend services",
        "Independent User-Service, Skill-Service, and Exam-Service instances",
        "Relational schema design with MySQL and Hibernate ORM for ACID transactions"
      ],
      metrics: [
        { label: "Architecture", value: "Microservices" },
        { label: "Security", value: "JWT & Spring Security" },
        { label: "Registry", value: "Netflix Eureka" },
        { label: "Database", value: "MySQL / JPA" }
      ],
      githubUrl: "https://github.com/VELUSAMY-22AIO56/SkillSphere-Microservices",
      liveUrl: "#"
    },
    {
      id: "dqn-nids",
      title: "Explainable Deep Q-Networks for Network Intrusion Detection",
      subtitle: "AI-Powered Intrusion Detection with Post-Hoc Model Explainability",
      category: "ai-ml",
      isFeatured: true,
      badge: "AI/ML & Cybersecurity",
      description: "An AI-powered network intrusion detection system utilizing Deep Q-Networks (DQN) to detect and classify complex network attacks, enhanced with SHAP and LIME for transparent model interpretability.",
      longDescription: "This research and engineering project addresses black-box opacity in cybersecurity machine learning. By training a Deep Q-Network reinforcement learning agent on network traffic feature vectors, the system accurately classifies benign vs malicious anomaly patterns. It integrates SHAP (SHapley Additive exPlanations) and LIME to generate per-packet feature importance visualizations, enabling security analysts to understand exactly why a traffic sample was flagged.",
      technologies: [
        "Python",
        "DQN (Deep Q-Network)",
        "Machine Learning",
        "SHAP",
        "LIME",
        "Scikit-learn",
        "Streamlit",
        "Pandas",
        "NumPy"
      ],
      features: [
        "Real-time network attack detection and multi-class anomaly classification",
        "Reinforcement learning agent trained with deep Q-value policy estimation",
        "Explainable AI (XAI) engine generating SHAP summary & waterfall plots",
        "LIME local surrogate explainers for fine-grained packet decision analysis",
        "Interactive Streamlit web dashboard for visualization and live traffic inspection",
        "Comprehensive model performance analysis (Precision, Recall, F1, ROC-AUC)"
      ],
      architecturePoints: [
        "Raw Network Packet Preprocessing -> Scaler & Feature Extractor (Pandas/NumPy)",
        "DQN Policy Network Evaluates State Space -> Action: Attack Class Prediction",
        "Explainability Hook -> Computes SHAP Shapley values & LIME perturbation scores",
        "Streamlit UI Visualizes Attack Vectors & Decision Reasoning in real time"
      ],
      metrics: [
        { label: "Model Type", value: "Deep Q-Network" },
        { label: "Explainability", value: "SHAP & LIME" },
        { label: "UI Dashboard", value: "Streamlit" },
        { label: "Focus", value: "Cybersecurity" }
      ],
      githubUrl: "https://github.com/VELUSAMY-22AIO56/Explainable-DQN-NIDS",
      liveUrl: "#"
    },
    {
      id: "anti-sleep-driver",
      title: "Anti-Sleep Device for Drivers Using ESP32-CAM",
      subtitle: "Real-Time Embedded Driver Safety & Hazard Alert System",
      category: "embedded",
      isFeatured: true,
      badge: "Embedded IoT & Safety",
      description: "A real-time driver safety system that detects driver drowsiness and alcohol presence, triggering immediate multi-tier visual, acoustic, vibration, and GSM SMS alerts.",
      longDescription: "Developed as an embedded edge hardware solution for vehicular accident prevention. The system combines an ESP32-CAM module running computer vision algorithms for eye-closure and yawn monitoring with an MQ-3 electrochemical sensor for breath alcohol detection. If critical thresholds are breached, the device triggers active buzzers, vibration motors, displays hazard telemetry on an LCD screen, transmits emergency GPS/SMS coordinates via a SIM800C GSM module, and engages an ignition safety cutoff.",
      technologies: [
        "ESP32",
        "ESP32-CAM",
        "GSM SIM800C",
        "MQ-3 Alcohol Sensor",
        "Arduino IDE",
        "LCD Display",
        "Buzzer",
        "Vibration Motor",
        "C/C++"
      ],
      features: [
        "Edge-based drowsiness and eye-closure detection via ESP32-CAM optical feed",
        "MQ-3 sensor integration for immediate in-cabin alcohol vapor detection",
        "Multi-tier alert mechanism with high-decibel buzzer and tactile vibration",
        "Automated emergency SMS notification dispatch via SIM800C GSM module",
        "Real-time status readout on 16x2 LCD display",
        "Ignition safety relay lockout to prevent driving under impairment"
      ],
      architecturePoints: [
        "Optical Feed -> ESP32-CAM Vision Processing Loop",
        "Sensor Array -> MQ-3 Analog Reading -> Threshold Comparator",
        "Alert Controller -> Triggers Buzzer, Vibration Motor & LCD",
        "GSM Subsystem -> SIM800C AT Commands -> Dispatches SMS Alert"
      ],
      metrics: [
        { label: "Controller", value: "ESP32-CAM" },
        { label: "Telemetry", value: "GSM SIM800C" },
        { label: "Gas Detection", value: "MQ-3 Sensor" },
        { label: "Response", value: "Real-Time Edge" }
      ],
      githubUrl: "https://github.com/VELUSAMY-22AIO56/Anti-Sleep-Driver-Safety",
      liveUrl: "#"
    }
  ] as Project[],

  experience: [
    {
      title: "Software Development Training",
      role: "Hands-On Developer Trainee",
      period: "Practical Development & Technical Training",
      focus: "Full-Stack Java, Spring Boot Microservices, Backend Engineering",
      description: "Intensive practical software development training centered on enterprise Java backend systems, database design, RESTful API development, and distributed microservices architecture.",
      highlights: [
        "Architected end-to-end RESTful web services with Spring Boot, handling request routing, validation, and JSON serialization.",
        "Implemented authentication and authorization mechanisms utilizing Spring Security, JWT (JSON Web Tokens), and RBAC.",
        "Engineered distributed microservices with Eureka service registration, Spring Cloud Gateway routing, and inter-service communication.",
        "Designed relational database schemas, optimized SQL queries, and implemented object-relational mapping with Hibernate/JPA and JDBC.",
        "Applied software engineering best practices including Git version control, branch management, collaborative workflows, and Postman API contract testing."
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Microservices",
        "REST APIs",
        "SQL",
        "Hibernate",
        "Git & GitHub"
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: "B.Tech — Artificial Intelligence & Data Science",
      institution: "Nandha Engineering College",
      period: "2022 – 2026",
      status: "Graduated",
      location: "Erode, Tamil Nadu",
      description: "Focused on foundational computer science principles, object-oriented programming, data structures, algorithms, relational databases, distributed systems, and applied AI/ML methods.",
      coursework: [
        "Java Programming & OOP",
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Machine Learning & Deep Learning",
        "Artificial Intelligence & Problem Solving",
        "Software Engineering & Architecture"
      ]
    }
  ] as EducationItem[],

  achievements: [
    {
      id: "1",
      title: "AI/ML Project Development",
      category: "Artificial Intelligence",
      description: "Engineered practical AI models incorporating deep learning, feature engineering pipelines, and reinforcement learning paradigms.",
      icon: "brain",
      tag: "AI & ML"
    },
    {
      id: "2",
      title: "Network Intrusion Detection Research/Project",
      category: "Cybersecurity & XAI",
      description: "Designed and trained Deep Q-Networks with SHAP/LIME explainability tools for transparent, high-precision network intrusion detection.",
      icon: "shield-check",
      tag: "Cybersecurity"
    },
    {
      id: "3",
      title: "Microservices Application Development",
      category: "Backend Architecture",
      description: "Built modular microservice architectures featuring API Gateway, Netflix Eureka discovery, and Spring Security JWT authentication.",
      icon: "layers",
      tag: "Distributed Systems"
    },
    {
      id: "4",
      title: "Hands-on Java Backend Development",
      category: "Enterprise Java",
      description: "Developed production-grade backend APIs with Spring Boot, Hibernate ORM, and MySQL handling structured domain logic.",
      icon: "code",
      tag: "Java / Spring Boot"
    },
    {
      id: "5",
      title: "GitHub Collaborative Development",
      category: "Version Control",
      description: "Maintained clean repository structures, documentation, and version control workflows across multiple engineering projects.",
      icon: "git-branch",
      tag: "Git & GitHub"
    },
    {
      id: "6",
      title: "Technical Training & Placement Preparation",
      category: "Software Engineering",
      description: "Rigorous preparation across data structures, system design basics, SQL optimization, and backend coding interviews.",
      icon: "award",
      tag: "Placement Prep"
    }
  ] as AchievementItem[],

  github: {
    username: "VELUSAMY-22AIO56",
    profileUrl: "https://github.com/VELUSAMY-22AIO56",
    headline: "Building. Learning. Shipping.",
    bio: "AI & Data Science Student | Java & Spring Boot Developer | Open-Source Contributor",
    repositories: [
      {
        name: "SkillSphere-Microservices",
        description: "Enterprise skill and learning management platform with Spring Boot, Spring Cloud Gateway, Eureka & JWT.",
        language: "Java",
        languageColor: "#b07219",
        stars: 12,
        forks: 4,
        url: "https://github.com/VELUSAMY-22AIO56/SkillSphere-Microservices"
      },
      {
        name: "Explainable-DQN-NIDS",
        description: "Network intrusion detection system using Deep Q-Networks with SHAP & LIME explainability.",
        language: "Python",
        languageColor: "#3572A5",
        stars: 15,
        forks: 5,
        url: "https://github.com/VELUSAMY-22AIO56/Explainable-DQN-NIDS"
      },
      {
        name: "Anti-Sleep-Driver-Safety",
        description: "Real-time driver drowsiness and alcohol detection system with ESP32-CAM and SIM800C GSM.",
        language: "C++",
        languageColor: "#f34b7d",
        stars: 9,
        forks: 2,
        url: "https://github.com/VELUSAMY-22AIO56/Anti-Sleep-Driver-Safety"
      },
      {
        name: "Java-Spring-Boot-Rest-APIs",
        description: "Collection of enterprise REST API design patterns, JWT security filters, and Hibernate mappings.",
        language: "Java",
        languageColor: "#b07219",
        stars: 8,
        forks: 3,
        url: "https://github.com/VELUSAMY-22AIO56/Java-Spring-Boot-Rest-APIs"
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
