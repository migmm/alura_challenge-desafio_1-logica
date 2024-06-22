document.addEventListener('DOMContentLoaded', function() {
    const textoIn = document.getElementById('texto-in');
    const textoOut = document.getElementById('texto-out');
    const btnEncriptar = document.getElementById('btn-encriptar');
    const btnCopiar = document.getElementById('btn-copiar');
    const mensajeError = document.querySelector('.mensaje-error');

    // Función para encriptar dados los requerimientos.
    function encriptar(texto) {
        const mapeo = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        };
        return texto.replace(/[aeiou]/g, letra => mapeo[letra]);
    }

    // Función para validar y convertir el texto a minúsculas
    // Convierte el texto en lower case y verifica si hay algo mas que letras
    // Si hay arroja un alert
    function validarYConvertir(texto) {
        const textoLowerCase = texto.toLowerCase();
        if (/^[a-z\s]*$/.test(textoLowerCase)) {
            return textoLowerCase;
        } else {
            alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
            return false;
        }
    }

    // Listener del boton Encriptar que llama a la función validarYConvertir
    // Si la conversión y la verificación está bien, encripta el texto 
    // Y llama a la función mostrarResultado
    btnEncriptar.addEventListener('click', function() {
        const textoValidado = validarYConvertir(textoIn.value);
        if (textoValidado) {
            const textoEncriptado = encriptar(textoValidado);
            mostrarResultado(textoEncriptado);
        }
    });

    // Función que se encarga de mostrar el resultado encriptado
    // Y oculta el texto de error, y muestra el textarea con el resultado
    // Y el botón para copiar el texto al portapapeles 
    function mostrarResultado(texto) {
        const textoEncriptado = encriptar(texto);
        textoOut.value = textoEncriptado;
        ajustarAltura(textoOut);
        textoOut.style.display = 'block';
        btnCopiar.style.display = 'block';
        mensajeError.style.display = 'none';
    }

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