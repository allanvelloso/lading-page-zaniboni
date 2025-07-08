// cookie-consent.js
export function setupCookieConsent() {
    if (localStorage.getItem('cookieConsent')) return;
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.style.position = 'fixed';
    banner.style.bottom = '0';
    banner.style.left = '0';
    banner.style.width = '100%';
    banner.style.background = '#2b3a5c';
    banner.style.color = '#fff';
    banner.style.padding = '1rem';
    banner.style.textAlign = 'center';
    banner.style.zIndex = '9999';
    banner.innerHTML = `
        Este site utiliza cookies para melhorar sua experiência. 
        <button id="accept-cookies" style="margin-left:1rem;padding:0.5rem 1.5rem;border:none;border-radius:20px;background:#ffa8a8;color:#2b3a5c;font-weight:600;cursor:pointer;">Aceitar</button>
    `;
    document.body.appendChild(banner);
    document.getElementById('accept-cookies').onclick = function() {
        localStorage.setItem('cookieConsent', 'true');
        banner.remove();
    };
} 