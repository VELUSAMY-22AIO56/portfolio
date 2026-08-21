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
      id: "employee-management",
      title: "Employee Management System",
      subtitle: "Enterprise Management Platform with Spring Boot & REST APIs",
      category: "backend",
      isFeatured: true,
      badge: "Java & Spring Backend Spotlight",
      description: "A robust enterprise employee and department management backend application architected with Java, Spring Boot, Spring Security, and MySQL database persistence.",
      longDescription: "Employee Management System is engineered to demonstrate production-grade backend principles using Java and Spring Boot. The system provides secure RESTful APIs for managing employees, department hierarchies, salaries, and roles. It incorporates comprehensive input validation, exception handling, JPA database relationships, and Postman API contract testing.",
      technologies: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Spring Security",
        "Hibernate / JPA",
        "MySQL",
        "Maven",
        "Postman"
      ],
      features: [
        "Complete CRUD lifecycle operations for employee and department data",
        "Role-Based Access Control (RBAC) and secure API endpoint authorization",
        "Dynamic pagination, sorting, and multi-field filtering capabilities",
        "Relational database schema modeling with Spring Data JPA and MySQL",
        "Global exception handling and structured JSON response formatting",
        "Extensive API contract verification with Postman collection testing"
      ],
      architecturePoints: [
        "Layered Architecture: Clean separation across Controllers, Service, and Data Access Layers",
        "Data Validation: Jakarta Bean Validation constraints for strict API boundary validation",
        "ORM Persistence: Hibernate JPA entity mappings with transactional queries",
        "REST Standards: Strict adherence to HTTP status codes and RESTful conventions"
      ],
      metrics: [
        { label: "Architecture", value: "REST API Backend" },
        { label: "Security", value: "Spring Security / RBAC" },
        { label: "Framework", value: "Spring Boot" },
        { label: "Database", value: "MySQL / JPA" }
      ],
      githubUrl: "https://github.com/VELUSAMY-22AIO56/Employee-Management-System-Using-Spring",
      liveUrl: "#"
    },
    {
      id: "anti-sleep-driver",
      title: "Driver Anti-Sleep & Safety Device",
      subtitle: "Real-Time Embedded Driver Safety & Hazard Alert System",
      category: "embedded",
      isFeatured: true,
      badge: "Embedded IoT & Safety",
      description: "A real-time vehicular safety system using ESP32-CAM and MQ-3 sensor that detects driver drowsiness and alcohol presence, triggering immediate multi-tier visual, acoustic, vibration, and GSM SMS alerts.",
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
      githubUrl: "https://github.com/VELUSAMY-22AIO56/DRIVER-ANTI-SLEEP-DEVICE-",
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
      title: "Embedded Safety & IoT Systems Engineering",
      category: "Embedded IoT & Hardware",
      description: "Engineered real-time edge driver drowsiness and alcohol detection systems integrating ESP32-CAM and SIM800C GSM alerts.",
      icon: "radio",
      tag: "Embedded IoT"
    },
    {
      id: "3",
      title: "Full-Stack Web & UI Development",
      category: "Frontend & Web Engineering",
      description: "Designed responsive, interactive developer interfaces featuring Canvas particles, 3D tilt effects, and accessible UI.",
      icon: "code",
      tag: "Web Development"
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
        name: "Employee-Management-System-Using-Spring",
        description: "Enterprise employee management backend application with Spring Boot, Spring Security, JPA & REST APIs.",
        language: "Java",
        languageColor: "#b07219",
        stars: 12,
        forks: 4,
        url: "https://github.com/VELUSAMY-22AIO56/Employee-Management-System-Using-Spring"
      },
      {
        name: "DRIVER-ANTI-SLEEP-DEVICE-",
        description: "Real-time driver drowsiness and alcohol detection system with ESP32-CAM and SIM800C GSM.",
        language: "C++",
        languageColor: "#f34b7d",
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
