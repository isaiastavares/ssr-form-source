window.addEventListener('load', function () {
    const queryParams = window.location.search.substring(1).split('&');
    var queryString = '';

    queryString += (index === 0 ? '#' : '&') + 'source=' + document.referrer
    
    queryParams.forEach(function(param, index) {
        queryString += (index === 0 ? '#' : '&') + param;
    });
    
    var currentSrc = $('#ssr-form').attr('src');
    
    var newSrc = currentSrc + queryString;
    
    $('#ssr-form').attr('src', newSrc);
});
