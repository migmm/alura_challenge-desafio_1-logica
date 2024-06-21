document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('texto-in');
    const btnCopiar = document.getElementById('btn-copiar');
    
    // Redimensiona el textarea texto-in a la cantidad de caracteres que contiene
    textarea.addEventListener('input', function() {
        this.style.height = 'auto'; 
        this.style.height = this.scrollHeight + 'px';

        btnCopiar.classList.remove('boton-copiar-clickeado');
    });

    // Cambia el color del botón Copiar cuando se hace click
    // Se reinicia cuando se modifica el contenido de texto-in
    btnCopiar.addEventListener('click', function() {
        btnCopiar.classList.add('boton-copiar-clickeado');
    });
});