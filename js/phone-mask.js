export function setupPhoneMask() {
    const tel = document.getElementById('telefone');
    if (!tel) return;
    tel.addEventListener('input', function(e) {
        let v = this.value.replace(/\D/g, '');
        if (v.length > 11) v = v.slice(0, 11);
        if (v.length > 10) {
            v = v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (v.length > 6) {
            v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (v.length > 2) {
            v = v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        } else if (v.length > 0) {
            v = v.replace(/(\d{0,2})/, '($1');
        } else {
            v = '';
        }
        this.value = v;
    });
} 