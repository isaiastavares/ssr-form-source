var iframeLoaded = false;

window.addEventListener('load', function () {
    var iframe = document.getElementById('ssr-form');
    
    if (iframe && !iframeLoaded) {
        var currentSrc = iframe.src;
        iframe.src = currentSrc + (currentSrc.includes('?') ? '&' : '?') + 'utm_source=' + encodeURIComponent(window.location.href);
        iframeLoaded = true;
    } else {
        console.log('I didn\'t find the form or it\'s already loaded');
    }
});
