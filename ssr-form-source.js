window.addEventListener('load', function () {
    const queryParams = window.location.search.substring(1).split('&');
    var queryString = '';

    var url = window.location.href;
    var domain = new URL(url).origin;
    
    queryString += 'source=' + domain;
    
    queryParams.forEach(function(param, index) {
        queryString += '&' + param;
    });
    
    var currentSrc = $('#ssr-form').attr('src');
    
    var newSrc = currentSrc + (currentSrc.includes('#') ? '' : '#') + queryString;
    
    $('#ssr-form').attr('src', newSrc);
});
