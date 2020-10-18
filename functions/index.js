const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const path = require('path');
const enforce = require('express-sslify');

const app = express();

// Maintainence mode
// app.use((req, res, next) => {
//     res.sendStatus(503);
// })

app.use(cors());
app.use(express.json());
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use(express.static(path.resolve(__dirname, './dist/static')));

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, './dist/service-worker.js'));
});

app.get('*', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

exports.app = functions.https.onRequest(app);
