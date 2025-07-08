export function setupFormAutosave() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    const fields = ['nome', 'email', 'telefone', 'area', 'mensagem'];
    // Restaurar
    fields.forEach(f => {
        if (localStorage.getItem('form_' + f)) {
            form[f].value = localStorage.getItem('form_' + f);
        }
    });
    // Salvar
    fields.forEach(f => {
        form[f].addEventListener('input', function() {
            localStorage.setItem('form_' + f, this.value);
        });
    });
    // Limpar ao enviar
    form.addEventListener('submit', function() {
        fields.forEach(f => localStorage.removeItem('form_' + f));
    });
} 