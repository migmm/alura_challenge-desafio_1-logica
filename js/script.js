document.addEventListener('DOMContentLoaded', function() {
    const textoIn = document.getElementById('texto-in');
    const textoOut = document.getElementById('texto-out');
    const btnEncriptar = document.getElementById('btn-encriptar');
    const btnDesencriptar = document.getElementById('btn-desencriptar');
    const btnCopiar = document.getElementById('btn-copiar');
    const mensajeError = document.querySelector('.mensaje-error');

    /**
    * Encripta un texto dado de acuerdo a un mapeo específico.
    * @param {string} texto - El texto a encriptar.
    * @return {string} - El texto encriptado.
    */
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

    /**
    * Desencripta un texto dado de acuerdo a un mapeo específico.
    * @param {string} texto - El texto a desencriptar.
    * @return {string} - El texto desencriptado.
    */
    function desencriptar(texto) {
        const mapeo = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };
        return texto.replace(/ai|enter|imes|ober|ufat/g, palabra => mapeo[palabra]);
    }

    /**
    * Valida el texto y lo convierte a minúsculas.
    * @param {string} texto - El texto a validar y convertir.
    * @return {string|boolean} - El texto en minúsculas si es válido, false si no lo es.
    */
    function validarYConvertir(texto) {
        const textoLowerCase = texto.toLowerCase();
        if (/^[a-z\s]*$/.test(textoLowerCase)) {
            return textoLowerCase;
        } else {
            alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
            return false;
        }
    }

    /**
    * Listener del botón Encriptar que valida y encripta el texto.
    */
    btnEncriptar.addEventListener('click', function() {
        const textoValidado = validarYConvertir(textoIn.value);
        if (textoValidado) {
            const textoEncriptado = encriptar(textoValidado);
            mostrarResultado(textoEncriptado);
        }
    });

    /**
    * Listener del botón Desencriptar que valida y desencripta el texto.
    */
    btnDesencriptar.addEventListener('click', function() {
        const textoValidado = validarYConvertir(textoIn.value);
        if (textoValidado) {
            const textoDesencriptado = desencriptar(textoValidado);
            mostrarResultado(textoDesencriptado);
        }
    });

    /**
    * Muestra el resultado encriptado o desencriptado y ajusta la interfaz.
    * @param {string} texto - El texto a mostrar.
    */
    function mostrarResultado(texto) {
        textoOut.value = texto;
        ajustarAltura(textoOut);
        textoOut.style.display = 'block';
        btnCopiar.style.display = 'block';
        mensajeError.style.display = 'none';
    }

    /**
    * Ajusta la altura del textarea según su contenido.
    * @param {HTMLElement} elemento - El textarea a ajustar.
    */
    function ajustarAltura(elemento) {
        elemento.style.height = 'auto';
        elemento.style.height = elemento.scrollHeight + 'px';
    }

    /**
    * Listener para ajustar la altura del textarea texto-in al cambiar su contenido.
    */
    textoIn.addEventListener('input', function() {
        ajustarAltura(this);
        btnCopiar.classList.remove('boton-copiar-clickeado');
    });

    /**
    * Listener para copiar el texto al portapapeles y cambiar el estilo del botón Copiar.
    */
    btnCopiar.addEventListener('click', function() {
        navigator.clipboard.writeText(textoOut.value).then(() => {
            btnCopiar.classList.add('boton-copiar-clickeado');
            alert("Texto copiado al portapapeles");
        });
    });

    /**
    * Listener para ajustar la altura del textarea texto-out al cambiar el tamaño de la ventana.
    */
    window.addEventListener('resize', function() {
        ajustarAltura(textoOut);
    });
});
