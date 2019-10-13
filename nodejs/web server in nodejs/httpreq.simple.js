var https = require('https');

https.get('https://nodejs.org/api/http.html#http_http_get_url_options_callback', (res) => {
    var rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        console.log(rawData)
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});