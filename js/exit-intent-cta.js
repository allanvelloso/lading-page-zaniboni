export function setupExitIntentCTA() {
    if (sessionStorage.getItem('exitIntentShown')) return;

    function showExitCTA() {
        sessionStorage.setItem('exitIntentShown', 'true');

        const cta = document.createElement('div');
        cta.id = 'exit-intent-cta';
        cta.style.position = 'fixed';
        cta.style.top = '20%';
        cta.style.left = '50%';
        cta.style.transform = 'translateX(-50%)';
        cta.style.background = '#ffffff';
        cta.style.border = '2px solid #2b3a5c';
        cta.style.borderRadius = '12px';
        cta.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)';
        cta.style.padding = '2rem';
        cta.style.zIndex = '10000';
        cta.style.maxWidth = '420px';
        cta.style.textAlign = 'center';
        cta.style.fontFamily = 'Arial, sans-serif';

        cta.innerHTML = `
            <button id="exit-close-btn" style="position:absolute;top:10px;right:15px;background:none;border:none;font-size:18px;font-weight:bold;color:#999;cursor:pointer;">×</button>
            <h3 style="margin-bottom: 1rem; color: #2b3a5c;">Ei! Antes de sair...</h3>
            <p style="margin-bottom: 1rem;">Você sabia que pode agendar uma consultoria agora mesmo?</p>
            <button id="stay-button" style="padding: 0.6rem 1.8rem; border: none; border-radius: 20px; background: #ffa8a8; color: #2b3a5c; font-weight: 600; cursor: pointer;">
                Sim, quero agendar!
            </button>
        `;

        document.body.appendChild(cta);

        // Botão fechar
        document.getElementById('exit-close-btn').onclick = () => {
            cta.remove();
        };

        // Redireciona para o formulário ao clicar
        document.getElementById('stay-button').onclick = () => {
            window.location.href = '#contactForm'; // link real para o formulário na landing page
        };
    }

    // Detecta saída com intenção
    document.addEventListener('mouseout', function (e) {
        if (!e.toElement && !e.relatedTarget && e.clientY <= 0) {
            showExitCTA();
        }
    });
} 