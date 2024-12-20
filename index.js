const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/get', (req, res) => {
    res.send('Hello Azure from Node.js API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
