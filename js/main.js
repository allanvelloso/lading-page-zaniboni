// main.js
import { enableSmoothScroll } from './scroll.js';
import { setupMobileMenu } from './mobile-menu.js';
import { setupFormValidation } from './form-validation.js';

document.addEventListener('DOMContentLoaded', () => {
    enableSmoothScroll();
    setupMobileMenu();
    setupFormValidation();
}); 