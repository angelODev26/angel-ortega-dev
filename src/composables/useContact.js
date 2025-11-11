import { ref } from 'vue';

// ✅ URL directa de Formspree
const FORMPREE_URL = 'https://formspree.io/f/xqagdgve';

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
      console.log('📝 Datos del formulario:', formData);

      // ✅ Formato que Formspree espera
      const formDataEncoded = new URLSearchParams();
      formDataEncoded.append('name', formData.name || '');
      formDataEncoded.append('email', formData.email || '');
      formDataEncoded.append('subject', formData.subject || '');
      formDataEncoded.append('message', formData.message || '');
      formDataEncoded.append('_replyto', formData.email || '');
      formDataEncoded.append('_subject', `Portfolio Contact: ${formData.subject || 'No Subject'}`);

      const response = await fetch(FORMPREE_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded', // ✅ Formspree prefiere este formato
        },
        body: formDataEncoded.toString()
      });

      console.log('📨 Respuesta status:', response.status);

      if (response.ok) {
        const result = await response.json();
        console.log('✅ Formulario procesado:', result);
        success.value = true;
        return { success: true, data: result };
      } else {
        // Formspree devuelve errores en JSON
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { error: await response.text() };
        }
        console.error('❌ Error de Formspree:', errorData);
        throw new Error(errorData.error || `Error ${response.status}: ${response.statusText}`);
      }

    } catch (err) {
      console.error('❌ Error de red:', err);
      error.value = err.message || 'Error al enviar el mensaje. Intenta nuevamente.';
      return { success: false, error: error.value };
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
