const express = require('express');
const app = express();
const dbSetup = require('./database/setup');
const studentRoute = require('./routes/studentRoutes');
const port = 5000;

dbSetup();

app.use(express.json());

app.use(studentRoute);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})