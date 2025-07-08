// analytics.js
export function setupAnalytics() {
    const btn = document.querySelector('button[type="submit"]');
    if (!btn) return;
    btn.addEventListener('click', function() {
        // Aqui você pode integrar com Google Analytics, ex:
        // gtag('event', 'submit', { 'event_category': 'Formulário', 'event_label': 'Contato' });
    });
} 