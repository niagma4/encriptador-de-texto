function encriptar() {
    const text = document.getElementById('texto').value.toLowerCase();

    let output = text.replace(/e/img, "enter");
    output = output.replace(/o/img, "ober");
    output = output.replace(/i/img, "imes");
    output = output.replace(/a/img, "ai");
    output = output.replace(/u/img, "ufat");

    document.getElementById('output').innerHTML = output;
    document.getElementById('sugerencia2').remove(this);
    document.getElementById('seguridad').remove(this);
    if (output.trim() !== "") {
        document.getElementById('btnCopiar').classList.remove('oculto');
    }
    document.getElementById('output').classList.add('cuadro2');

    if (output.trim() !== "") {
        document.getElementById('btnDesencriptar').disabled = false;
    }
}

document.getElementById('btnEncriptar').addEventListener('click', function() {
    encriptar();
});

function desencriptar() {
    if ( document.getElementById('texto').value.trim() === "" ) {
        document.getElementById('output').innerHTML = "No hay texto que desencriptar";
        return;
    }

    const text = document.getElementById('texto').value.toLowerCase();

    let output = text.replace(/enter/img, "e");
    output = output.replace(/ober/img, "o");
    output = output.replace(/imes/img, "i");
    output = output.replace(/ai/img, "a");
    output = output.replace(/ufat/img, "u");

    document.getElementById('output').innerHTML = output;
}

document.getElementById('btnDesencriptar').addEventListener('click', function() {
    desencriptar();
});

function copiar() {
    const text = document.getElementById('output').innerHTML;
    navigator.clipboard.writeText(text);
}

document.getElementById('btnCopiar').addEventListener('click', function() {
    copiar();
});