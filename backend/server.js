//all imports & dependencies
const express = require('express');
require('dotenv').config();

//express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the app' });
});

//listening for requests
app.listen(process.env.PORT, () => {
  console.log(`listening on PORT, ${process.env.PORT}`);
});
