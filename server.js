const express = require('express');
const doctorRoutes = require('./routers/doctorRoutes');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/doctor', doctorRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the HealthConnect API!');
});

app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
