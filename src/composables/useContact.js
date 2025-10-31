import { ref } from 'vue';

// ✅ URL condicional: Proxy en desarrollo, directa en producción
const FORMPREE_URL = import.meta.env.DEV
    ? '/api/f/xqagdgve'  // Usa proxy en desarrollo
    : 'https://formspree.io/f/xqagdgve'; // URL directa en producción

export function useContact() {
    const isSubmitting = ref(false);
    const error = ref(null);
    const success = ref(false);

    const submitContactForm = async (formData) => {
        isSubmitting.value = true;
        error.value = null;
        success.value = false;

        try {
            console.log('📤 Enviando formulario a:', FORMPREE_URL);

            const response = await fetch(FORMPREE_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _replyto: formData.email
                })
            });

            // Manejo de respuesta simplificado
            if (response.ok) {
                const result = await response.json();
                console.log('✅ Formulario procesado:', result);
                success.value = true;
                return { success: true, data: result };
            } else {
                const errorText = await response.text();
                console.error('❌ Error del servidor:', errorText);
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

        } catch (err) {
            console.error('❌ Error de red:', err);
            error.value = err.message;
            return { success: false, error: err.message };
        } finally {
            isSubmitting.value = false;
        }
    };

    const resetState = () => {
        isSubmitting.value = false;
        error.value = null;
        success.value = false;
    };

    return {
        isSubmitting,
        error,
        success,
        submitContactForm,
        resetState
    };
}