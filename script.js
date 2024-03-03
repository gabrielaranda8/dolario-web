document.addEventListener('DOMContentLoaded', function() {
    var inputMonto = document.getElementById('monto');
    var monedaOrigen = document.getElementById('moneda-origen');
    var monedaDestino = document.getElementById('moneda-destino');

    // Eventos que detectan cambios.
    inputMonto.addEventListener('input', actualizarConversion);
    monedaOrigen.addEventListener('change', function() {
        actualizarEtiquetas(monedaOrigen.value, monedaDestino.value);
        actualizarConversion();
    });
    monedaDestino.addEventListener('change', function() {
        actualizarEtiquetas(monedaOrigen.value, monedaDestino.value);
        actualizarConversion();
    });
    // Actualiza las etiquetas al cargar la página
    actualizarEtiquetas(monedaOrigen.value, monedaDestino.value);
});

function actualizarConversion() {
    var monto = document.getElementById('monto').value;
    var monedaOrigen = document.getElementById('moneda-origen').value;
    var monedaDestino = document.getElementById('moneda-destino').value;
    
    // Aquí necesitarías una función que devuelva la tasa de conversión
    var tasaConversion = obtenerTasaConversion(monedaOrigen, monedaDestino);

    // Calcula el monto con el margen adicional
    var resultado = monto * tasaConversion;
    document.getElementById('resultado').value = resultado.toFixed(2);
}

function actualizarEtiquetas(origen, destino) {
    document.getElementById('moneda-envio-label').textContent = origen;
    document.getElementById('moneda-recepcion-label').textContent = destino;
    document.getElementById('titulo-moneda-origen').textContent = origen;
    document.getElementById('titulo-moneda-destino').textContent = destino;
}

function obtenerTasaConversion(origen, destino) {
    // Supongamos que esta función devolverá la tasa de cambio correcta.
    return 1.08; // Valor de ejemplo
}

function actualizarImagenMoneda(moneda, idImagen) {
    var rutaImagen;
    switch(moneda) {
        case 'EUR':
            rutaImagen = 'banco_eur.png';
            break;
        case 'ARS':
            rutaImagen = 'banco_arg.png';
            break;
        case 'USDT':
            rutaImagen = 'usdt.png';
            break;
        case 'USD-PAYPAL':
            rutaImagen = 'palpal.png';
            break;
        case 'USD-USA':
            rutaImagen = 'banco_usd.png';
            break;
        // Agrega casos para otras monedas
        default:
            rutaImagen = ''; // O una imagen por defecto
    }
    document.getElementById(idImagen).src = rutaImagen;
    document.getElementById(idImagen).style.display = rutaImagen ? 'inline' : 'none';
}

function mostrarFormulario() {
    var formularioHTML = `
        <div class="formulario">
            <input type="text" id="nombre" placeholder="Nombre" />
            <input type="email" id="email" placeholder="Email" />
            <input type="text" id="direccion" placeholder="Dirección" />
            <div class="terminos-container">
                <input type="checkbox" id="terminos" onchange="verificarTerminos()">
                <label for="terminos">Acepto términos y condiciones</label>
            </div>
            <button id="btn-enviar" onclick="enviarFormulario()" disabled>Enviar</button>
        </div>
    `;
    document.getElementById('formulario-container').innerHTML = formularioHTML;
    document.getElementById('formulario-container').style.display = 'block';
}

function verificarTerminos() {
    var checkbox = document.getElementById('terminos');
    var botonEnviar = document.getElementById('btn-enviar');
    botonEnviar.disabled = !checkbox.checked;
}

function enviarFormulario() {
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    alert("Formulario enviado (aquí iría la lógica de envío)");
}
