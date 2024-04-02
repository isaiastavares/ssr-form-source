document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.getElementById('ssr-form');
    
    if (iframe) {
        var currentSrc = iframe.src;
        iframe.src = currentSrc + (currentSrc.includes('?') ? '&' : '?') + 'source=' + encodeURIComponent(window.location.href);
    }
});
