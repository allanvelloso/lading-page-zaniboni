// mobile-menu.js
export function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const bars = hamburger?.querySelector('.hamburger-bars');
    const xIcon = hamburger?.querySelector('.hamburger-x');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            if (hamburger.classList.contains('active')) {
                hamburger.setAttribute('aria-label', 'Fechar menu');
                hamburger.setAttribute('aria-expanded', 'true');
                if (bars) bars.style.display = 'none';
                if (xIcon) xIcon.style.display = 'block';
            } else {
                hamburger.setAttribute('aria-label', 'Abrir menu');
                hamburger.setAttribute('aria-expanded', 'false');
                if (bars) bars.style.display = 'flex';
                if (xIcon) xIcon.style.display = 'none';
            }
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                if (bars) bars.style.display = 'flex';
                if (xIcon) xIcon.style.display = 'none';
                hamburger.setAttribute('aria-label', 'Abrir menu');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
} 