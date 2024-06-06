const express = require("express");
const doctorRoutes = require("./routers/doctorRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({}));

app.use("/doctor", doctorRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the HealthConnect API!");
});

app.use((req, res) => {
  res.status(404).send("Sorry, cannot find that!");
});

app.use((err, req, res) => {
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {});
