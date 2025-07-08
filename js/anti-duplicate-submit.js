export function setupAntiDuplicateSubmit() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    let lastSubmit = 0;
    form.addEventListener('submit', function(e) {
        const now = Date.now();
        if (now - lastSubmit < 5000) {
            e.preventDefault();
            showAntiDupMessage(form);
            return false;
        }
        lastSubmit = now;
    });
}

function showAntiDupMessage(form) {
    if (form.querySelector('.anti-dup-msg')) return;
    const msg = document.createElement('div');
    msg.className = 'anti-dup-msg';
    msg.textContent = 'Por favor, aguarde alguns segundos antes de enviar novamente.';
    msg.style.color = '#d32f2f';
    msg.style.fontSize = '0.95em';
    msg.style.marginTop = '0.5em';
    msg.setAttribute('role', 'alert');
    form.appendChild(msg);
    setTimeout(() => msg.remove(), 4000);
} 