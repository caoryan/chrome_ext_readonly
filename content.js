 List of allowed domains
const whitelist = [
    google.com,
    youtube.com,
    gemini.google.com,
    accounts.google.com,
    mail.google.com,
    docs.google.com
];

function isWhitelisted() {
    const hostname = window.location.hostname;
     Checks if the current hostname ends with any of the whitelisted domains
    return whitelist.some(domain = hostname === domain  hostname.endsWith(. + domain));
}

 If the site is NOT whitelisted, block keyboard events
if (!isWhitelisted()) {
     We use the capture phase (true) to intercept the event before it reaches the page elements
    window.addEventListener('keydown', function(e) {
        e.stopPropagation();
        e.preventDefault();
        return false;
    }, true);

    window.addEventListener('keypress', function(e) {
        e.stopPropagation();
        e.preventDefault();
        return false;
    }, true);

    window.addEventListener('keyup', function(e) {
        e.stopPropagation();
        e.preventDefault();
        return false;
    }, true);
}