const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Maintainence mode
// app.use((req, res, next) => {
//     res.sendStatus(503);
// })

app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});