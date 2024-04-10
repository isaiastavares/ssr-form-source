//var iframeLoaded = false;

window.addEventListener('load', function () {
    // Obter o valor atual do atributo src
    var currentSrc = $('#ssr-form').attr('src');
    
    // Adicionar o parâmetro utm_source
    var newSrc = currentSrc + (currentSrc.includes('?') ? '&' : '?') + 'utm_source=' + encodeURIComponent(window.location.href);
    
    // Definir o novo valor do atributo src
    $('#ssr-form').attr('src', newSrc);
    /*
    var iframe = document.getElementById('ssr-form');
    
    if (iframe && !iframeLoaded) {
        var currentSrc = iframe.src;
        iframe.src = currentSrc + (currentSrc.includes('?') ? '&' : '?') + 'utm_source=' + encodeURIComponent(window.location.href);
        iframeLoaded = true;
    } else {
        console.log('I didn\'t find the form or it\'s already loaded');
    }*/
});
