const express = require('express');

const app = express();

//setup request with callback
app.get('/', (req, res) => res.send('API Running'))

//if there is an environment variable use otherwise 5000
const PORT = process.env.PORT || 5000;

//pass in port and log callback after connect (template literal with backticks)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));