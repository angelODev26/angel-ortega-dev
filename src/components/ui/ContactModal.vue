<template>
    <Transition name="modal">
        <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
            <div class="modal-container">
                <!-- Header del Modal -->
                <div class="modal-header">
                    <h2>{{ $t('contact.title') }}</h2>
                    <button class="close-button" @click="closeModal" aria-label="Close">
                        <span>&times;</span>
                    </button>
                </div>

                <!-- Contenido del Modal -->
                <div class="modal-content">
                    <!-- ✅ MENSAJES EN PARTE SUPERIOR - MÁS VISIBLES -->
                    <div v-if="success" class="success-message">
                        <div class="message-icon">✅</div>
                        <div class="message-content">
                            <strong>{{ $t('contact.form.successTitle') }}</strong>
                            <p>{{ $t('contact.form.successMessage') }}</p>
                        </div>
                        <button class="close-message" @click="resetAndClose">✕</button>
                    </div>

                    <div v-else-if="error" class="error-message">
                        <div class="message-icon">❌</div>
                        <div class="message-content">
                            <strong>{{ $t('contact.form.errorTitle') }}</strong>
                            <p>{{ error }}</p>
                        </div>
                        <button class="close-message" @click="error = null">✕</button>
                    </div>

                    <!-- Formulario (se oculta en éxito) -->
                    <form v-if="!success" @submit.prevent="handleSubmit" class="contact-form">
                        <!-- Campos del formulario (sin cambios) -->
                        <div class="form-group">
                            <label for="name">{{ $t('contact.form.name') }}</label>
                            <input id="name" v-model="form.name" type="text" required
                                :placeholder="$t('contact.form.namePlaceholder')" />
                        </div>

                        <div class="form-group">
                            <label for="email">{{ $t('contact.form.email') }}</label>
                            <input id="email" v-model="form.email" type="email" required
                                placeholder="example@example.com" />
                        </div>

                        <div class="form-group">
                            <label for="subject">{{ $t('contact.form.subject') }}</label>
                            <input id="subject" v-model="form.subject" type="text" required
                                :placeholder="$t('contact.form.subjectPlaceholder')" />
                        </div>

                        <div class="form-group">
                            <label for="message">{{ $t('contact.form.message') }}</label>
                            <textarea id="message" v-model="form.message" rows="5" required
                                :placeholder="$t('contact.form.messagePlaceholder')"></textarea>
                        </div>

                        <!-- Botones de Acción -->
                        <div class="form-actions">
                            <button type="button" class="btn-secondary" @click="closeModal">
                                {{ $t('contact.form.cancel') }}
                            </button>
                            <button type="submit" class="btn-primary" :disabled="isSubmitting">
                                {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.submit') }}
                            </button>
                        </div>
                    </form>

                    <!-- ✅ BOTÓN DE CERRAR SOLO EN ÉXITO -->
                    <div v-if="success" class="success-actions">
                        <button class="btn-primary" @click="resetAndClose">
                            {{ $t('contact.form.close') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
    name: 'ContactModal',
    props: {
        isOpen: {
            type: Boolean,
            default: false
        },
        isSubmitting: {
            type: Boolean,
            default: false
        },
        success: {
            type: Boolean,
            default: false
        },
        error: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    },
    watch: {
        isOpen(newVal) {
            if (newVal) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
                this.resetForm();
                this.$emit('reset');
            }
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },

        // ✅ NUEVO: Resetear y cerrar
        resetAndClose() {
            this.resetForm();
            this.$emit('reset');
            this.$emit('close');
        },

        async handleSubmit() {
            this.$emit('submit', this.form);
        },

        resetForm() {
            this.form = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };
        }
    }
}
</script>

<style scoped>
.success-message,
.error-message {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    position: relative;
}

.success-message {
    background: #f0f9f0;
    border: 2px solid #4caf50;
    color: #2e7d32;
}

.error-message {
    background: #fdf2f2;
    border: 2px solid #f44336;
    color: #c53030;
}

.message-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
}

.message-content {
    flex: 1;
}

.message-content strong {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.message-content p {
    margin: 0;
    line-height: 1.5;
}

.close-message {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: inherit;
    opacity: 0.7;
    padding: 0.25rem;
}

.close-message:hover {
    opacity: 1;
}

.success-actions {
    text-align: center;
    padding-top: 2rem;
}

.success-actions .btn-primary {
    min-width: 120px;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    /* Más oscuro para mejor contraste */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px;
}

.modal-container {
    background: var(--color-background-soft);
    border: 1px solid var(--color-border);
    border-radius: 16px;
    /* Coincide con tu hero-main-card */
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    max-width: 500px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    /* Coincide con tu padding */
    border-bottom: 1px solid var(--color-border);
}

.modal-header h2 {
    margin: 0;
    color: var(--color-heading);
    font-size: 1.5rem;
    font-weight: 700;
    /* Coincide con tu hero-title */
}

.close-button {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--color-text-secondary);
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
    /* Coincide con tus transiciones */
}

.close-button:hover {
    background-color: var(--color-border);
    color: var(--color-heading);
}

.modal-content {
    padding: 2rem;
    /* Coincide con tu padding */
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    font-weight: 600;
    /* Coincide con tu estilo */
    color: var(--color-heading);
    font-size: 0.9rem;
}

.form-group input,
.form-group textarea {
    padding: 12px;
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: inherit;
    color: var(--color-text);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: var(--color-text-secondary);
}

.form-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 1rem;
}

.btn-primary,
.btn-secondary {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
}

.btn-primary {
    background: var(--color-primary);
    color: white;
}

.btn-primary:hover:not(:disabled) {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    /* Efecto hover como tus botones */
}

.btn-primary:disabled {
    background: var(--color-text-secondary);
    cursor: not-allowed;
    transform: none;
}

.btn-secondary {
    background: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
    background: var(--color-primary);
    color: white;
    transform: translateY(-2px);
    /* Efecto hover como tus botones */
}

/* Transiciones del modal - Mejoradas */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
    transition: transform 0.3s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    transform: scale(0.95) translateY(-10px);
}

/* Responsive */
@media (max-width: 640px) {
    .modal-container {
        margin: 20px;
        max-height: calc(100vh - 40px);
    }

    .modal-header,
    .modal-content {
        padding: 1.5rem;
    }

    .form-actions {
        flex-direction: column-reverse;
    }

    .btn-primary,
    .btn-secondary {
        width: 100%;
    }
}
</style>