import { createI18n } from 'vue-i18n'

// Mensajes en español
const messages = {
  es: {
    welcome: '¡Hola! Soy Angel Ortega',
    title: 'Backend Developer',
    experience: '7+ años de experiencia en desarrollo web',
    about: 'Sobre Mí',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  en: {
    welcome: "Hello! I'm Angel Ortega",
    title: 'Backend Developer',
    experience: '7+ years of web development experience',
    about: 'About Me',
    projects: 'Projects',
    contact: 'Contact',
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'es', // Idioma por defecto
  fallbackLocale: 'en', // Idioma de respaldo
  messages,
})

export default i18n
