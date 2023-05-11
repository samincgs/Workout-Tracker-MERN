//all imports & dependencies
const express = require('express');
const workoutRoutes = require('./routes/workouts');
require('dotenv').config();

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use('/api/workouts', workoutRoutes);

//listening for requests
app.listen(process.env.PORT, () => {
  console.log(`listening on PORT, ${process.env.PORT}`);
});
