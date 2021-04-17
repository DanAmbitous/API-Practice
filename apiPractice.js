const express = require('express');
const app = express();
const port = 5995;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.static('public'));