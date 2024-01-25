function openLink(url) {
    window.open(url, '_blank');
}

function openFileInNewTab() {
    var link = document.createElement('a');
    link.href = '/src/files/CV David Gomez EN.pdf'; // Ruta del archivo a abrir
    link.target = '_blank'; // Abre en una nueva pestaña
    link.click();
}