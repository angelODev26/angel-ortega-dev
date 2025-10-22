import { createI18n } from 'vue-i18n'

// Mensajes en español
const messages = {
  es: {
    header: {
      home: 'Inicio',
      projects: 'Proyectos',
      blog: 'Blog',
      contact: 'Contacto',
      downloadCV: 'Descargar CV',
    },
    profile: {
      name: 'Angel Ortega',
      title: 'Backend Developer Expert - PHP/Laravel',
      description:
        'Desarrollador Backend con 7+ años especializado en APIs REST, microservicios y optimización de bases de datos. He escalado procesamiento de datos de 30,000 a 150,000 registros por minuto.',
      technologies: 'Tecnologías Principales',
      techList: [
        'PHP/Laravel',
        'MySQL/PostgreSQL',
        'MongoDB',
        'Redis',
        'Docker',
        'AWS',
        'Java/Spring Boot',
        'Vue.js',
      ],
      contact: 'Contacto',
    },
    hero: {
      greeting: '¡Hola! Soy',
      title: 'Backend Developer Expert',
      subtitle: 'PHP/Laravel • APIs REST • Optimización de BD',
      experience: '7+ años escalando aplicaciones y procesando 150,000+ registros/minuto',
      exploreProjects: 'Ver Proyectos',
      readBlog: 'Leer Blog',
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
    },
  },
  en: {
    header: {
      home: 'Home',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
      downloadCV: 'Download CV',
    },
    profile: {
      name: 'Angel Ortega',
      title: 'Backend Developer Expert - PHP/Laravel',
      description:
        "Backend Developer with 7+ years specialized in REST APIs, microservices and database optimization. I've scaled data processing from 30,000 to 150,000 records per minute.",
      technologies: 'Main Technologies',
      techList: [
        'PHP/Laravel',
        'MySQL/PostgreSQL',
        'MongoDB',
        'Redis',
        'Docker',
        'AWS',
        'Java/Spring Boot',
        'Vue.js',
      ],
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi! I'm",
      title: 'Backend Developer Expert',
      subtitle: 'PHP/Laravel • REST APIs • Database Optimization',
      experience: '7+ years scaling applications and processing 150,000+ records/minute',
      exploreProjects: 'Explore Projects',
      readBlog: 'Read Blog',
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
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'es', // Idioma por defecto
  fallbackLocale: 'en', // Idioma de respaldo
  messages,
})

export default i18n
