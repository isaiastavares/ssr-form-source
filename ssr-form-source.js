document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.getElementById('ssr-form');
    
    if (iframe) {
        var currentSrc = iframe.src;
        iframe.src = currentSrc + (currentSrc.includes('?') ? '&' : '?') + 'utm_source=' + encodeURIComponent(window.location.href);
    }
});
