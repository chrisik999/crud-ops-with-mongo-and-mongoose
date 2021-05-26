const express = require('express');
const app = express();
const dbSetup = require('./database/setup');
const studentRoute = require('./routes/studentRoutes');
const authRoutes = require('./routes/authRoutes');
const port = process.env.port||5000;

dbSetup();

app.use(express.json());

app.use(studentRoute);

app.use(authRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})