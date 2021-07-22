const express = require('express');
const http2Express = require('http2-express-bridge')
const http2 = require('http2');
const fs = require('fs');
// https://javascript.plainenglish.io/serving-hello-world-with-http2-and-express-js-4dd0ffe76860
const app = http2Express(express);
const port = 9442;
const staticRoot = 'static';

app.use(express.static(staticRoot));

const server = http2.createSecureServer({
    key: fs.readFileSync('localhost-privkey.pem'),
    cert: fs.readFileSync('localhost-cert.pem')
},app).listen(port, (err) => {
    if (err) {
        throw new Error(err);
    }
    console.log(`Listening at https://localhost:${port}`)
});
 