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
    }, legal: {
      lastUpdated: 'Última actualización',
    },
    // En tu i18n.js - Reemplaza los placeholders con esto:

    terms: {
      header: 'Términos de Uso',
      sections: {
        acceptance: {
          title: 'Aceptación de los Términos',
          content: `
        <p>Al acceder y utilizar el sitio web angel-ortega-dev.netlify.app (en adelante, "el Sitio"),
        usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso.</p>
        <p>Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestro Sitio.</p>
      `
        },
        use: {
          title: 'Uso Permitido',
          content: `
        <p>Este Sitio está destinado exclusivamente para:</p>
        <ul>
          <li>Obtener información sobre mis servicios de desarrollo de software</li>
          <li>Revisar mi experiencia profesional y portafolio de proyectos</li>
          <li>Ponerse en contacto conmigo para oportunidades de colaboración</li>
          <li>Descargar mi CV para fines de reclutamiento</li>
        </ul>
        <p>No está permitido utilizar este Sitio para:</p>
        <ul>
          <li>Actividades comerciales no autorizadas</li>
          <li>Extraer datos mediante scraping o métodos automatizados</li>
          <li>Realizar actividades ilegales o fraudulentas</li>
        </ul>
      `
        },
        intellectual: {
          title: 'Propiedad Intelectual',
          content: `
        <p>Todos los contenidos presentes en este Sitio, incluyendo pero no limitado a:</p>
        <ul>
          <li>Textos, gráficos, logotipos e imágenes</li>
          <li>Código fuente y compilado</li>
          <li>Diseño y estructura del Sitio</li>
          <li>Documentación de proyectos</li>
        </ul>
        <p>son propiedad de Angel Ortega o se utilizan con las debidas licencias y permisos.</p>
        <p>El contenido puede ser utilizado para revisar mis capacidades profesionales,
        pero no puede ser reproducido, distribuido o modificado sin mi autorización expresa.</p>
      `
        },
        liability: {
          title: 'Limitación de Responsabilidad',
          content: `
        <p>Este Sitio se proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD". No ofrezco garantías de:</p>
        <ul>
          <li>Disponibilidad continua o ininterrumpida del Sitio</li>
          <li>Exactitud absoluta de la información presentada</li>
          <li>Compatibilidad con todos los dispositivos y navegadores</li>
        </ul>
        <p>En la máxima medida permitida por la ley, no seré responsable por:</p>
        <ul>
          <li>Daños indirectos, incidentales o consecuentes</li>
          <li>Pérdida de datos o interrupciones del servicio</li>
          <li>Decisiones tomadas basándose en el contenido del Sitio</li>
        </ul>
      `
        },
        changes: {
          title: 'Cambios en los Términos',
          content: `
        <p>Me reservo el derecho de modificar estos Términos de Uso en cualquier momento.
        Los cambios entrarán en vigor inmediatamente después de su publicación en el Sitio.</p>
        <p>El uso continuado del Sitio después de dichos cambios constituye su aceptación
        de los términos modificados.</p>
        <p>Se recomienda revisar periódicamente esta página para estar al tanto de
        cualquier actualización.</p>
      `
        },
        contact: {
          title: 'Contacto',
          content: `
        <p>Para cualquier pregunta sobre estos Términos de Uso, puede contactarme a través de:</p>
        <ul>
          <li>El formulario de contacto disponible en el Sitio</li>
          <li>Mi perfil de LinkedIn en /in/devangelob</li>
        </ul>
        <p><strong>Fecha de última actualización:</strong> 1 de Noviembre de 2024</p>
      `
        }
      }
    },
    privacy: {
      header: 'Política de Privacidad',
      sections: {
        collection: {
          title: 'Recopilación de Información',
          content: `
        <p>Recopilo la siguiente información de manera voluntaria y transparente:</p>
        <ul>
          <li><strong>Información de contacto:</strong> nombre, email y mensaje a través del formulario de contacto</li>
          <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador, páginas visitadas (mediante cookies)</li>
          <li><strong>Información analítica:</strong> datos agregados sobre el uso del sitio mediante Google Analytics</li>
        </ul>
      `
        },
        use: {
          title: 'Uso de la Información',
          content: `
        <p>Utilizo su información exclusivamente para:</p>
        <ul>
          <li>Responder a sus consultas y solicitudes de contacto</li>
          <li>Mejorar la experiencia de usuario en el Sitio</li>
          <li>Analizar tendencias de tráfico y uso del Sitio</li>
          <li>Prevenir fraudes y abusos</li>
        </ul>
        <p><strong>No comparto, vendo ni alquilo su información personal a terceros.</strong></p>
      `
        },
        cookies: {
          title: 'Cookies y Tecnologías Similares',
          content: `
        <p>Este Sitio utiliza cookies para:</p>
        <ul>
          <li>Recordar sus preferencias de idioma</li>
          <li>Analizar el tráfico y uso del Sitio (Google Analytics)</li>
          <li>Mejorar el rendimiento y la experiencia del usuario</li>
        </ul>
        <p>Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.</p>
      `
        },
        rights: {
          title: 'Tus Derechos',
          content: `
        <p>De acuerdo con la legislación de protección de datos, usted tiene derecho a:</p>
        <ul>
          <li><strong>Acceder:</strong> conocer qué información tengo sobre usted</li>
          <li><strong>Rectificar:</strong> corregir información inexacta</li>
          <li><strong>Eliminar:</strong> solicitar la eliminación de sus datos personales</li>
          <li><strong>Oponerse:</strong> oponerse al tratamiento de sus datos</li>
        </ul>
        <p>Para ejercer estos derechos, contácteme a través del formulario de contacto.</p>
      `
        },
        security: {
          title: 'Seguridad',
          content: `
        <p>Implemento medidas de seguridad razonables para proteger su información:</p>
        <ul>
          <li>Comunicaciones seguras mediante HTTPS</li>
          <li>Almacenamiento seguro de datos en servicios certificados</li>
          <li>Acceso restringido a información personal</li>
        </ul>
      `
        },
        contact: {
          title: 'Contacto',
          content: `
        <p>Para cualquier pregunta sobre privacidad o protección de datos, puede contactarme a través de:</p>
        <ul>
          <li>El formulario de contacto disponible en el Sitio</li>
          <li>Mi perfil de LinkedIn en /in/devangelob</li>
        </ul>
        <p><strong>Fecha de última actualización:</strong> 1 de Noviembre de 2024</p>
      `
        }
      }
    },
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
    legal: {
      lastUpdated: 'Last Updated',
    },
    terms: {
      header: 'Terms of Use',
      sections: {
        acceptance: {
          title: 'Acceptance of Terms',
          content: `
        <p>By accessing and using the website angel-ortega-dev.netlify.app (hereinafter, "the Site"),
        you agree to comply with and be bound by the following terms and conditions of use.</p>
        <p>If you disagree with any of these terms, please do not use our Site.</p>
      `
        },
        use: {
          title: 'Permitted Use',
          content: `
        <p>This Site is intended exclusively for:</p>
        <ul>
          <li>Obtaining information about my software development services</li>
          <li>Reviewing my professional experience and project portfolio</li>
          <li>Contacting me for collaboration opportunities</li>
          <li>Downloading my CV for recruitment purposes</li>
        </ul>
        <p>You are not permitted to use this Site for:</p>
        <ul>
          <li>Unauthorized commercial activities</li>
          <li>Data scraping or automated extraction methods</li>
          <li>Illegal or fraudulent activities</li>
        </ul>
      `
        },
        intellectual: {
          title: 'Intellectual Property',
          content: `
        <p>All content present on this Site, including but not limited to:</p>
        <ul>
          <li>Texts, graphics, logos, and images</li>
          <li>Source and compiled code</li>
          <li>Site design and structure</li>
          <li>Project documentation</li>
        </ul>
        <p>are the property of Angel Ortega or used with proper licenses and permissions.</p>
        <p>Content may be used to review my professional capabilities,
        but may not be reproduced, distributed, or modified without my express authorization.</p>
      `
        },
        liability: {
          title: 'Limitation of Liability',
          content: `
        <p>This Site is provided "AS IS" and "AS AVAILABLE". I make no warranties regarding:</p>
        <ul>
          <li>Continuous or uninterrupted availability of the Site</li>
          <li>Absolute accuracy of the information presented</li>
          <li>Compatibility with all devices and browsers</li>
        </ul>
        <p>To the fullest extent permitted by law, I shall not be liable for:</p>
        <ul>
          <li>Indirect, incidental, or consequential damages</li>
          <li>Data loss or service interruptions</li>
          <li>Decisions made based on the Site's content</li>
        </ul>
      `
        },
        changes: {
          title: 'Changes to Terms',
          content: `
        <p>I reserve the right to modify these Terms of Use at any time.
        Changes will take effect immediately after being posted on the Site.</p>
        <p>Continued use of the Site after such changes constitutes your acceptance
        of the modified terms.</p>
        <p>It is recommended to periodically review this page to stay informed
        of any updates.</p>
      `
        },
        contact: {
          title: 'Contact',
          content: `
        <p>For any questions about these Terms of Use, you can contact me through:</p>
        <ul>
          <li>The contact form available on the Site</li>
          <li>My LinkedIn profile at /in/devangelob</li>
        </ul>
        <p><strong>Last update date:</strong> November 1, 2024</p>
      `
        }
      }
    },
    privacy: {
      header: 'Privacy Policy',
      sections: {
        collection: {
          title: 'Information Collection',
          content: `
        <p>I collect the following information voluntarily and transparently:</p>
        <ul>
          <li><strong>Contact information:</strong> name, email, and message through the contact form</li>
          <li><strong>Technical data:</strong> IP address, browser type, visited pages (via cookies)</li>
          <li><strong>Analytical information:</strong> aggregated data about site usage through Google Analytics</li>
        </ul>
      `
        },
        use: {
          title: 'Use of Information',
          content: `
        <p>I use your information exclusively for:</p>
        <ul>
          <li>Responding to your inquiries and contact requests</li>
          <li>Improving user experience on the Site</li>
          <li>Analyzing traffic trends and Site usage</li>
          <li>Preventing fraud and abuse</li>
        </ul>
        <p><strong>I do not share, sell, or rent your personal information to third parties.</strong></p>
      `
        },
        cookies: {
          title: 'Cookies and Similar Technologies',
          content: `
        <p>This Site uses cookies to:</p>
        <ul>
          <li>Remember your language preferences</li>
          <li>Analyze traffic and Site usage (Google Analytics)</li>
          <li>Improve performance and user experience</li>
        </ul>
        <p>You can manage your cookie preferences through your browser settings.</p>
      `
        },
        rights: {
          title: 'Your Rights',
          content: `
        <p>In accordance with data protection legislation, you have the right to:</p>
        <ul>
          <li><strong>Access:</strong> know what information I have about you</li>
          <li><strong>Rectify:</strong> correct inaccurate information</li>
          <li><strong>Delete:</strong> request deletion of your personal data</li>
          <li><strong>Object:</strong> object to the processing of your data</li>
        </ul>
        <p>To exercise these rights, contact me through the contact form.</p>
      `
        },
        security: {
          title: 'Security',
          content: `
        <p>I implement reasonable security measures to protect your information:</p>
        <ul>
          <li>Secure communications via HTTPS</li>
          <li>Secure data storage in certified services</li>
          <li>Restricted access to personal information</li>
        </ul>
      `
        },
        contact: {
          title: 'Contact',
          content: `
        <p>For any questions about privacy or data protection, you can contact me through:</p>
        <ul>
          <li>The contact form available on the Site</li>
          <li>My LinkedIn profile at /in/devangelob</li>
        </ul>
        <p><strong>Last update date:</strong> November 1, 2024</p>
      `
        }
      }
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
