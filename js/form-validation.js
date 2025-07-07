export function setupFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    const btn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(e) {
        // Limpa erros antigos
        form.querySelectorAll('.form-error').forEach(el => el.remove());
        form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

        let valid = true;

        // Nome: mínimo 2 caracteres
        const nome = form.nome;
        if (!nome.value.trim() || nome.value.trim().length < 2) {
            showError(nome, 'Digite seu nome completo (mínimo 2 caracteres).');
            valid = false;
        }

        // E-mail: regex
        const email = form.email;
        const emailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
            showError(email, 'Digite um e-mail válido.');
            valid = false;
        }

        // Telefone: (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
        const telefone = form.telefone;
        const telRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        if (!telefone.value.trim() || !telRegex.test(telefone.value.trim())) {
            showError(telefone, 'Digite um telefone válido no formato (XX) XXXXX-XXXX.');
            valid = false;
        }

        // Área jurídica
        const area = form.area;
        if (!area.value) {
            showError(area, 'Escolha uma área jurídica.');
            valid = false;
        }

        // Mensagem: mínimo 10 caracteres
        const mensagem = form.mensagem;
        if (!mensagem.value.trim() || mensagem.value.trim().length < 10) {
            showError(mensagem, 'A mensagem deve ter pelo menos 10 caracteres.');
            valid = false;
        }

        if (!valid) {
            e.preventDefault();
            // Foca no primeiro campo inválido
            const firstError = form.querySelector('.error');
            if (firstError) firstError.focus();
            return;
        }

        // Impede envios duplicados
        btn.disabled = true;
        const originalText = btn.textContent;
        btn.textContent = 'Enviando...';
        setTimeout(() => {
            btn.disabled = false;
            btn.textContent = originalText;
        }, 4000); // reabilita após 4s caso o usuário volte
    });
}

function showError(field, message) {
    field.classList.add('error');
    const error = document.createElement('div');
    error.className = 'form-error';
    error.textContent = message;
    error.style.color = '#d32f2f';
    error.style.fontSize = '0.95em';
    error.style.marginTop = '0.25em';
    error.setAttribute('role', 'alert');
    if (field.parentNode) field.parentNode.appendChild(error);
} 