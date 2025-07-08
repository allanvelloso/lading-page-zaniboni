// main.js
import { enableSmoothScroll } from './scroll.js';
import { setupMobileMenu } from './mobile-menu.js';
import { setupFormValidation } from './form-validation.js';
import { setupCookieConsent } from './cookie-consent.js';
import { setupPhoneMask } from './phone-mask.js';
import { setupFormAutosave } from './form-autosave.js';
import { setupAnalytics } from './analytics.js';
import { setupAntiDuplicateSubmit } from './anti-duplicate-submit.js';
import { setupFormLeaveWarning } from './form-leave-warning.js';
import { setupExitIntentCTA } from './exit-intent-cta.js';

document.addEventListener('DOMContentLoaded', () => {
    enableSmoothScroll();
    setupMobileMenu();
    setupFormValidation();
    setupCookieConsent();
    setupPhoneMask();
    setupFormAutosave();
    setupAnalytics();
    setupAntiDuplicateSubmit();
    setupFormLeaveWarning();
    setupExitIntentCTA();
}); 