const express = require('express');
const dotenv = require('dotenv').config();
const authRoute = require('./routes/auth');

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/api/user', authRoute);
app.listen(port, () => console.log(`Server running on port:${port}`));
