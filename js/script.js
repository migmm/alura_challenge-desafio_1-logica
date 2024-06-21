document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('texto-in');

    // Redimensiona el textarea texto-in a la cantidad de caracteres que contiene
    textarea.addEventListener('input', function() {
        this.style.height = 'auto'; 
        this.style.height = this.scrollHeight + 'px'; 
    });
});