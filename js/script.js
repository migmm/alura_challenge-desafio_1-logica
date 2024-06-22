document.addEventListener('DOMContentLoaded', function() {
    const textoIn = document.getElementById('texto-in');
    const btnCopiar = document.getElementById('btn-copiar');

    // Función para ajustar la altura del textarea según su contenido
    function ajustarAltura(elemento) {
        elemento.style.height = 'auto';
        elemento.style.height = elemento.scrollHeight + 'px';
    }

    // Redimensiona el textarea texto-in a la cantidad de caracteres que contiene
    textoIn.addEventListener('input', function() {
        ajustarAltura(this);
        btnCopiar.classList.remove('boton-copiar-clickeado');
    });

    // Cambia el color del botón Copiar cuando se hace click
    // Se reinicia cuando se modifica el contenido de texto-in
    btnCopiar.addEventListener('click', function() {
        btnCopiar.classList.add('boton-copiar-clickeado');
    });
});