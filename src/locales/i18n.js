import { createI18n } from 'vue-i18n'

// Mensajes en español
const messages = {
  es: {
    header: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre Mí',
      contact: 'Contacto',
      downloadCV: 'Descargar CV',
    },
    hero: {
      greeting: "Hola, soy Angel Ortega",
      title: "Backend Developer Senior",
      subtitle: "PHP/Laravel • APIs REST • Java/Spring Boot • Vue.js",
      experience: "7+ años diseñando sistemas backend robustos y optimizados",
      exploreProjects: "Ver Proyectos",
      contactMe: "Contactar",
      seeMore: "Ver más",
      cards: {
        apis: "APIs REST",
        apisDesc: "Diseño e implementación de APIs robustas, documentadas y listas para integración.",
        apisAdditional: "Desarrollo de APIs RESTful con Laravel y Spring Boot, manejo de webhooks, integración con servicios AWS, y procesamiento eficiente de datos a gran escala.",
        optimization: "Optimización",
        optimizationDesc: "Sistemas de alto rendimiento con tiempos de respuesta mínimos y máxima eficiencia.",
        optimizationAdditional: "Enfoque en optimización de consultas SQL, implementación de sistemas de caché con Redis, y arquitecturas escalables para el procesamiento de grandes volúmenes de datos.",
        technologies: "Tecnologías",
        techList: [
          { icon: "⚡", text: "PHP & Laravel" },
          { icon: "☕", text: "Java & Spring Boot" },
          { icon: "📱", text: "Vue.js & JavaScript" },
          { icon: "🗄️", text: "MySQL & PostgreSQL" },
          { icon: "🍃", text: "MongoDB & Redis" },
          { icon: "🐳", text: "Docker & AWS" },
          { icon: "🔗", text: "Git & APIs REST" }
        ]
      }
    },
    about: {
      pageTitle: "Sobre Mí",
      professionalSummary: "Resumen Profesional",
      professionalSummaryText: "Desarrollador Backend PHP/Laravel con más de 7 años de experiencia diseñando y optimizando APIs REST y microservicios en entornos de alto volumen de datos. Experto en MySQL y PostgreSQL para modelado de esquemas, optimización de consultas e índices, y corrección de datos 'en caliente'. He logrado analizar cientos de miles de registros para detectar errores y, mediante históricos y análisis, corregirlos eficazmente. Desarrollé herramientas que procesaron y validaron hasta 150 000 registros en menos de 1 minuto. Competente en desarrollo de jobs en Laravel, APIs, controladores, validadores, seeders, comandos, colas (MongoDB, Redis, SQS) y webhooks. Experiencia en contenedorización con Docker, gestión de versiones con Git, almacenamiento en AWS S3 e integración con SendGrid/Masiv. Trabajo bajo metodologías Agile/Scrum y documentando APIs con Postman.",
      workExperience: "Experiencia Laboral",
      technicalSkills: "Habilidades Técnicas",
      technicalSkills: "Habilidades Técnicas",
      skillCategories: {
        backend: "Backend",
        databases: "Bases de Datos",
        frontend: "Frontend",
        devops: "DevOps & Cloud",
        methodologies: "Metodologías"
      },
      skills: {
        php: "PHP",
        laravel: "Laravel",
        java: "Java",
        spring: "Spring Boot",
        mysql: "MySQL",
        postgresql: "PostgreSQL",
        mongodb: "MongoDB",
        redis: "Redis",
        vue: "Vue.js",
        javascript: "JavaScript",
        docker: "Docker",
        aws: "AWS",
        git: "Git",
        nginx: "Nginx",
        postman: "Postman",
        agile: "Agile/Scrum",
        microservices: "Microservicios",
        rest: "APIs REST",
        bootstrap: "Bootstrap",
        html: "HTML5",
        css: "CSS3",
        apache: "Apache",
        linux: "Linux",
        jquery: "jQuery"
      }
    },
    specialization: {
      title: 'Especialización Backend',
      content:
        'APIs REST, Microservicios, Optimización de Bases de Datos, Procesamiento Masivo de Datos',
    },
    achievement: {
      title: 'Logro Destacado',
      content:
        'Escalé el procesamiento de registros de 30,000/h a 150,000 registros por minuto optimizando MongoDB y lógica de jobs',
    },
    technologies: {
      title: 'Stack Tecnológico',
    },
    timeline: {
      experience: 'Experiencia Laboral',
      achievements: 'Logros Destacados',
      jobs: [
        {
          position: 'Desarrollador Backend',
          company: 'LAX TECH S.A.S.',
          period: 'Ago 2023 - Jun 2024',
          description:
            'Desarrollo y optimización de aplicaciones Laravel, manejo de bases de datos MySQL/MongoDB, implementación de colas con Redis/SQS.',
          technologies: ['Laravel', 'MongoDB', 'Redis', 'Docker', 'SQS'],
          achievements: [
            'Escalé procesamiento de 30k a 150k registros/minuto',
            'Implementación de microservicios con Docker',
            'Optimización de índices y consultas MongoDB',
          ],
        },
        {
          position: 'Desarrollador de Software IT',
          company: 'HOWDEN WACOLDA S.A.',
          period: 'May 2022 - Ago 2023',
          description:
            'Desarrollo full-stack con PHP, PostgreSQL y JavaScript. Optimización de consultas y administración de servidores.',
          technologies: ['PHP', 'PostgreSQL', 'JavaScript', 'jQuery'],
          achievements: [
            'Optimización de consultas SQL complejas',
            'Administración de servidores y despliegues',
          ],
        },
        {
          position: 'Desarrollador de Software',
          company: 'EXTREME TECHNOLOGIES',
          period: 'Oct 2020 - Abr 2022',
          description:
            'Desarrollo full-stack con PHP, Vue.js y PostgreSQL. Gestión de bases de datos y optimización de rendimiento.',
          technologies: ['PHP', 'Vue.js', 'PostgreSQL', 'Bootstrap'],
          achievements: [
            'Implementación de frontend con Vue.js',
            'Optimización de stored procedures y triggers',
          ],
        },
        {
          position: 'Desarrollador de Software',
          company: 'XNET Computación',
          period: 'Ene 2018 - Mar 2019',
          description:
            'Desarrollo full-stack en Java, PHP y MySQL. Desarrollo de app Android nativa para gestión de pedidos.',
          technologies: ['Java', 'PHP', 'MySQL', 'Android'],
          achievements: [
            'Desarrollo de app Android nativa',
            'Implementación de APIs REST para móviles',
          ],
        },
      ],
      achievementsList: [
        {
          title: 'Optimización de Procesamiento Masivo',
          description:
            'Escalé el procesamiento de datos de 30,000 a 150,000 registros por minuto mediante optimización de MongoDB y implementación de colas.',
        },
        {
          title: 'Arquitectura de Microservicios',
          description:
            'Diseñé e implementé una arquitectura de microservicios que mejoró la escalabilidad y mantenibilidad del sistema.',
        },
        {
          title: 'Seguridad y Performance',
          description:
            'Corregí vulnerabilidades de SQL Injection y optimicé consultas reduciendo tiempos de respuesta en 70%.',
        },
      ],
    },
    projects: {
      title: 'Proyectos Destacados',
      relax: {
        title: 'Relax - Plataforma de Envíos Masivos',
        description:
          'Herramienta de envío masivo de comunicaciones por email y SMS con procesamiento de 150,000+ registros/minuto.',
        technologies: ['PHP (Laravel)', 'MongoDB', 'Docker', 'Redis', 'SQS', 'Webhooks'],
        achievements: [
          'Reducción de tiempo de procesamiento de horas a minutos',
          'Escalado a 150,000 registros por job',
          'Implementación de colas y microservicios',
        ],
      },
      magnum: {
        title: 'Magnum - Sistema de Contabilidad',
        description:
          'Sistema de contabilidad empresarial con módulo nativo para pedidos en restaurantes y app Android.',
        technologies: ['Java', 'Android Studio', 'SQLite', 'MySQL', 'PHP'],
        achievements: [
          'App Android nativa para gestión de pedidos',
          'Integración completa con sistema principal',
          'Almacenamiento local para configuraciones',
        ],
      },
    },
    footer: {
      copyright: '© {year} Angel Ortega Dev. Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Uso',
    },// En tus mensajes i18n
    contact: {
      title: 'Contact Me',
      subtitle: '¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad',
      formTitle: 'Envíame un mensaje',
      info: {
        email: {
          title: 'Email',
          description: 'Escríbeme directamente'
        },
        linkedin: {
          title: 'LinkedIn',
          handle: '/in/devangelob',
          description: 'Conectemos profesionalmente'
        },
        github: {
          title: 'GitHub',
          description: 'Explora mis proyectos'
        }
      },
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre completo',
        email: 'Email',
        subject: 'Asunto',
        subjectPlaceholder: '¿De qué quieres hablar?',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
        submit: 'Enviar mensaje',
        sending: 'Enviando...',
        cancel: 'Cancelar',
        success: '¡Mensaje enviado! Te responderé pronto.',
        error: 'Error al enviar. Intenta nuevamente.',
        successTitle: "¡Mensaje enviado!",
        successMessage: "Te responderé lo antes posible.",
        errorTitle: "Error al enviar",
        close: "Cerrar"
      }
    }

  },
  en: {
    header: {
      home: 'Home',
      projects: 'Projects',
      about: 'About Me',
      contact: 'Contact',
      downloadCV: 'Download CV',
    },
    hero: {
      greeting: "Hello, I'm Angel Ortega",
      title: "Senior Backend Developer",
      subtitle: "PHP/Laravel • APIs REST • Java/Spring Boot • Vue.js",
      experience: "7+ years designing robust and optimized backend systems",
      exploreProjects: "View Projects",
      contactMe: "Contact Me",
      seeMore: "See more",
      cards: {
        apis: "REST APIs",
        apisDesc: "Design and implementation of robust, documented APIs ready for integration.",
        apisAdditional: "Development of RESTful APIs with Laravel and Spring Boot, webhooks handling, integration with AWS services, and efficient large-scale data processing.",
        optimization: "Optimization",
        optimizationDesc: "High-performance systems with minimal response times and maximum efficiency.",
        optimizationAdditional: "Focus on SQL query optimization, Redis cache system implementation, and scalable architectures for large-scale data processing.",
        technologies: "Technologies",
        techList: [
          { icon: "⚡", text: "PHP & Laravel" },
          { icon: "☕", text: "Java & Spring Boot" },
          { icon: "📱", text: "Vue.js & JavaScript" },
          { icon: "🗄️", text: "MySQL & PostgreSQL" },
          { icon: "🍃", text: "MongoDB & Redis" },
          { icon: "🐳", text: "Docker & AWS" },
          { icon: "🔗", text: "Git & REST APIs" }
        ]

      }
    },
    about: {
      pageTitle: "About Me",
      professionalSummary: "Professional Summary",
      professionalSummaryText: "PHP/Laravel Backend Developer with over 7 years of experience designing and optimizing REST APIs and microservices in high-volume data environments. Expert in MySQL and PostgreSQL for schema modeling, query and index optimization, and 'hot' data correction. I have successfully analyzed hundreds of thousands of records to detect errors and, through historical data and analysis, corrected them effectively. Developed tools that processed and validated up to 150,000 records in less than 1 minute. Proficient in Laravel job development, APIs, controllers, validators, seeders, commands, queues (MongoDB, Redis, SQS) and webhooks. Experience with Docker containerization, Git version control, AWS S3 storage, and SendGrid/Masiv integration. Work under Agile/Scrum methodologies and API documentation with Postman.",
      workExperience: "Work Experience",
      technicalSkills: "Technical Skills",
      technicalSkills: "Technical Skills",
      skillCategories: {
        backend: "Backend",
        databases: "Databases",
        frontend: "Frontend",
        devops: "DevOps & Cloud",
        methodologies: "Methodologies"
      },
      skills: {
        php: "PHP",
        laravel: "Laravel",
        java: "Java",
        spring: "Spring Boot",
        mysql: "MySQL",
        postgresql: "PostgreSQL",
        mongodb: "MongoDB",
        redis: "Redis",
        vue: "Vue.js",
        javascript: "JavaScript",
        docker: "Docker",
        aws: "AWS",
        git: "Git",
        nginx: "Nginx",
        postman: "Postman",
        agile: "Agile/Scrum",
        microservices: "Microservices",
        rest: "REST APIs",
        bootstrap: "Bootstrap",
        html: "HTML5",
        css: "CSS3",
        apache: "Apache",
        linux: "Linux",
        jquery: "jQuery"
      }
    },
    specialization: {
      title: 'Backend Specialization',
      content: 'REST APIs, Microservices, Database Optimization, Massive Data Processing',
    },
    achievement: {
      title: 'Key Achievement',
      content:
        'Scaled record processing from 30,000/h to 150,000 records per minute by optimizing MongoDB and job logic',
    },
    technologies: {
      title: 'Tech Stack',
    },
    timeline: {
      experience: 'Work Experience',
      achievements: 'Key Achievements',
      jobs: [
        {
          position: 'Backend Developer',
          company: 'LAX TECH S.A.S.',
          period: 'Aug 2023 - Jun 2024',
          description:
            'Development and optimization of Laravel applications, MySQL/MongoDB database management, queue implementation with Redis/SQS.',
          technologies: ['Laravel', 'MongoDB', 'Redis', 'Docker', 'SQS'],
          achievements: [
            'Scaled processing from 30k to 150k records/minute',
            'Microservices implementation with Docker',
            'MongoDB indexes and queries optimization',
          ],
        },
        {
          position: 'IT Software Developer',
          company: 'HOWDEN WACOLDA S.A.',
          period: 'May 2022 - Aug 2023',
          description:
            'Full-stack development with PHP, PostgreSQL and JavaScript. Query optimization and server administration.',
          technologies: ['PHP', 'PostgreSQL', 'JavaScript', 'jQuery'],
          achievements: [
            'Complex SQL queries optimization',
            'Server administration and deployments',
          ],
        },
        {
          position: 'Software Developer',
          company: 'EXTREME TECHNOLOGIES',
          period: 'Oct 2020 - Apr 2022',
          description:
            'Full-stack development with PHP, Vue.js and PostgreSQL. Database management and performance optimization.',
          technologies: ['PHP', 'Vue.js', 'PostgreSQL', 'Bootstrap'],
          achievements: [
            'Vue.js frontend implementation',
            'Stored procedures and triggers optimization',
          ],
        },
        {
          position: 'Software Developer',
          company: 'XNET Computación',
          period: 'Jan 2018 - Mar 2019',
          description:
            'Full-stack development in Java, PHP and MySQL. Native Android app development for order management.',
          technologies: ['Java', 'PHP', 'MySQL', 'Android'],
          achievements: ['Native Android app development', 'REST APIs implementation for mobile'],
        },
      ],
      achievementsList: [
        {
          title: 'Massive Processing Optimization',
          description:
            'Scaled data processing from 30,000 to 150,000 records per minute through MongoDB optimization and queue implementation.',
        },
        {
          title: 'Microservices Architecture',
          description:
            'Designed and implemented a microservices architecture that improved system scalability and maintainability.',
        },
        {
          title: 'Security and Performance',
          description:
            'Fixed SQL Injection vulnerabilities and optimized queries reducing response times by 70%.',
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      relax: {
        title: 'Relax - Massive Sending Platform',
        description:
          'Massive email and SMS communications tool processing 150,000+ records/minute.',
        technologies: ['PHP (Laravel)', 'MongoDB', 'Docker', 'Redis', 'SQS', 'Webhooks'],
        achievements: [
          'Reduced processing time from hours to minutes',
          'Scaled to 150,000 records per job',
          'Queue and microservices implementation',
        ],
      },
      magnum: {
        title: 'Magnum - Accounting System',
        description:
          'Business accounting system with native module for restaurant orders and Android app.',
        technologies: ['Java', 'Android Studio', 'SQLite', 'MySQL', 'PHP'],
        achievements: [
          'Native Android app for order management',
          'Complete integration with main system',
          'Local storage for configurations',
        ],
      },
    },
    footer: {
      copyright: '© {year} Angel Ortega Dev. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Do you have a project in mind? Let\'s talk and make it happen',
      formTitle: 'Send me a message',
      info: {
        email: {
          title: 'Email',
          description: 'Write to me directly'
        },
        linkedin: {
          title: 'LinkedIn',
          handle: '/in/devangelob',
          description: 'Let\'s connect professionally'
        },
        github: {
          title: 'GitHub',
          description: 'Explore my projects'
        }
      },
      form: {
        name: 'Name',
        namePlaceholder: 'Your full name',
        email: 'Email',
        subject: 'Subject',
        subjectPlaceholder: 'What do you want to talk about?',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        submit: 'Send message',
        sending: 'Sending...',
        cancel: 'Cancel',
        success: 'Message sent! I\'ll get back to you soon.',
        error: 'Error sending. Please try again.',
        successTitle: "Message sent!",
        successMessage: "I\'ll get back to you soon.",
        errorTitle: "Error sending.",
        close: "Close"
      }
    }
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'es', // Idioma por defecto
  fallbackLocale: 'en', // Idioma de respaldo
  messages,
})

export default i18n
