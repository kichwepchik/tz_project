function showCatalog(catalog) {
    const catalogs = document.querySelectorAll('.catalog');
    catalogs.forEach(cat => cat.classList.remove('active'));
    document.getElementById(catalog).classList.add('active');

    const buttons = document.querySelectorAll('.menu-button');
    buttons.forEach(button => button.classList.remove('selected'));
    document.querySelector(`.menu-button[onclick="showCatalog('${catalog}')"]`).classList.add('selected');
}

// Automatically show coffee catalog if coming from home page
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const show = urlParams.get('show') || 'coffee';
    showCatalog(show);
}
