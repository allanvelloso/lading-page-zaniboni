// main.js
import { enableSmoothScroll } from './scroll.js';
import { setupMobileMenu } from './mobile-menu.js';
import { setupFormHandler } from './form-handler.js';

document.addEventListener('DOMContentLoaded', () => {
    enableSmoothScroll();
    setupMobileMenu();
    setupFormHandler();
}); 