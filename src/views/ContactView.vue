<template>
    <div class="contact-view">
        <div class="contact-container">
            <!-- Header -->
            <div class="contact-header">
                <h1 class="contact-title">{{ $t('contact.title') }}</h1>
                <p class="contact-subtitle">{{ $t('contact.subtitle') }}</p>
            </div>

            <div class="contact-content">
                <!-- Información de contacto -->
                <div class="contact-info">
                    <div class="info-card">
                        <div class="info-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </div>
                        <div class="info-content">
                            <h3>{{ $t('contact.info.email.title') }}</h3>
                            <p class="email-display" id="email-display">
                                <!-- Email ofuscado en partes -->
                                <span data-user="angel26OB"></span>
                                <span style="display:none">no-spam</span>@
                                <span data-domain="outlook"></span>.
                                <span data-tld="com"></span>
                            </p>
                            <small>{{ $t('contact.info.email.description') }}</small>
                        </div>
                    </div>

                    <div class="info-card clickable" @click="openLink('https://linkedin.com/in/devangelob')">
                        <div class="info-icon">
                            <i class="devicon-linkedin-plain"></i>
                        </div>
                        <div class="info-content">
                            <h3>{{ $t('contact.info.linkedin.title') }}</h3>
                            <span>{{ $t('contact.info.linkedin.handle') }}</span>
                            &nbsp; <small>{{ $t('contact.info.linkedin.description') }}</small>
                        </div>
                    </div>

                    <div class="info-card clickable" @click="openLink('https://github.com/angelODev26')">
                        <div class="info-icon">
                            <i class="devicon-github-plain"></i>
                        </div>
                        <div class="info-content">
                            <h3>{{ $t('contact.info.github.title') }}</h3>
                            <span>{{ $t('contact.info.github.handle') }}</span>
                            &nbsp; <small>{{ $t('contact.info.github.description') }}</small>
                        </div>
                    </div>
                </div>

                <!-- Formulario de contacto -->
                <div class="contact-form-section">
                    <h2>{{ $t('contact.formTitle') }}</h2>
                    <form @submit.prevent="handleSubmit" class="contact-form">
                        <!-- Honeypot Field -->
                        <input type="text" name="website" v-model="honeypot" style="display: none;" tabindex="-1"
                            autocomplete="off">

                        <div class="form-group">
                            <label for="name">{{ $t('contact.form.name') }}</label>
                            <input id="name" v-model="form.name" type="text" required
                                :placeholder="$t('contact.form.namePlaceholder')">
                        </div>

                        <div class="form-group">
                            <label for="email">{{ $t('contact.form.email') }}</label>
                            <input id="email" v-model="form.email" type="email" required
                                :placeholder="$t('contact.form.emailPlaceholder')">
                        </div>

                        <div class="form-group">
                            <label for="subject">{{ $t('contact.form.subject') }}</label>
                            <input id="subject" v-model="form.subject" type="text" required
                                :placeholder="$t('contact.form.subjectPlaceholder')">
                        </div>

                        <div class="form-group">
                            <label for="message">{{ $t('contact.form.message') }}</label>
                            <textarea id="message" v-model="form.message" rows="5" required
                                :placeholder="$t('contact.form.messagePlaceholder')"></textarea>
                        </div>

                        <button type="submit" class="submit-btn" :disabled="loading">
                            {{ loading ? $t('contact.form.sending') : $t('contact.form.submit') }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const honeypot = ref('')
const loading = ref(false)

const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
}

onMounted(() => {
    // Reconstruir email de forma segura
    const emailElement = document.getElementById('email-display')
    if (emailElement) {
        const user = emailElement.querySelector('[data-user]').getAttribute('data-user')
        const domain = emailElement.querySelector('[data-domain]').getAttribute('data-domain')
        const tld = emailElement.querySelector('[data-tld]').getAttribute('data-tld')

        const fullEmail = `${user}@${domain}.${tld}`
        emailElement.innerHTML = fullEmail

        // Hacer clickable para copiar o abrir email
        emailElement.style.cursor = 'pointer'
        emailElement.addEventListener('click', () => {
            window.open(`mailto:${fullEmail}`, '_blank')
        })
    }
})

const handleSubmit = async () => {
    // Verificar honeypot
    if (honeypot.value) {
        console.log('Bot detectado')
        return
    }

    loading.value = true

    try {
        // Reemplaza esta URL con la que te da Formspree
        const response = await fetch('https://formspree.io/f/xqagdgve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                subject: form.subject,
                message: form.message,
                _replyto: form.email, // Para que te respondan directo
            })
        })

        if (response.ok) {
            alert(t('contact.form.success'))
            // Reset form
            Object.keys(form).forEach(key => form[key] = '')
        } else {
            throw new Error('Error en el envío')
        }
    } catch (error) {
        console.error('Error:', error)
        alert(t('contact.form.error'))
    } finally {
        loading.value = false
    }
}

// Función para decodificar email (opcional)
const decodeEmail = () => {
    return 'moc.liamg@agetrolegna'.split('').reverse().join('')
}
</script>

<style scoped>
.contact-view {
    min-height: 100vh;
    padding: 120px 2rem 2rem;
    background: var(--color-background);
}

.contact-container {
    max-width: 1200px;
    margin: 0 auto;
}

.contact-header {
    text-align: center;
    margin-bottom: 4rem;
}

.contact-title {
    font-size: 3rem;
    color: var(--color-heading);
    margin-bottom: 1rem;
}

.contact-subtitle {
    font-size: 1.2rem;
    color: var(--color-text);
    max-width: 600px;
    margin: 0 auto;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.info-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: var(--color-background-soft);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    transition: all 0.3s ease;
}

.info-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.info-icon {
    font-size: 2rem;
    color: var(--color-primary);
}

.info-content h3 {
    color: var(--color-heading);
    margin-bottom: 0.5rem;
}

.info-content p,
.info-content a {
    color: var(--color-text);
    text-decoration: none;
    margin-bottom: 0.25rem;
}

.info-content a:hover {
    color: var(--color-primary);
}

.info-content small {
    color: var(--color-text-secondary);
    font-size: 0.85rem;
}

.email-obfuscated {
    font-family: monospace;
    direction: rtl;
    unicode-bidi: bidi-override;
}

.contact-form-section {
    background: var(--color-background-soft);
    border: 1px solid var(--color-border);
    border-radius: 16px;
    padding: 2.5rem;
}

.contact-form-section h2 {
    color: var(--color-heading);
    margin-bottom: 2rem;
    font-size: 1.8rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    color: var(--color-heading);
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background: var(--color-background);
    color: var(--color-text);
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-primary);
}

.submit-btn {
    width: 100%;
    padding: 1rem 2rem;
    background: var(--color-primary);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
}

.submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

/* Responsive */
@media (max-width: 968px) {
    .contact-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .contact-title {
        font-size: 2.5rem;
    }
}

@media (max-width: 768px) {
    .contact-view {
        padding: 100px 1rem 1rem;
    }

    .contact-form-section {
        padding: 2rem;
    }

    .info-card {
        padding: 1rem;
    }
}
</style>