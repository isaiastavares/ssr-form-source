document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.getElementById('ssr-form');
    
    if (iframe) {
        var currentSrc = iframe.src;
        iframe.src = currentSrc + (currentSrc.includes('?') ? '&' : '?') + 'source=' + encodeURIComponent(window.location.href);

        iframe.addEventListener("load", insertScriptInSubmittedMessage);
    }
});

const createScriptElement = (src) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    return script;
};

const createDivElement = (className, dataSrc) => {
    const div = document.createElement('div');
    div.className = className;
    div.setAttribute('data-src', dataSrc);
    return div;
};

function insertScriptInSubmittedMessage(iframe) {
    console.log('loading iframe');
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var submittedMessageDiv = iframeDocument.querySelector(".submitted-message");

    if (submittedMessageDiv) {
        const meetingsDivElement = createDivElement('meetings-iframe-container', 'https://meetings.hubspot.com/zach-mason/zach-advisor-calls?embed=true');
        const meetingsScriptElement = createScriptElement('https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js');
    
        submittedMessageDiv.appendChild(meetingsDivElement);
        submittedMessageDiv.appendChild(meetingsScriptElement);
    }
}
