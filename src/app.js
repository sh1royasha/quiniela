const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./presentation/routes/usuarioRoutes");
const partidoRoutes = require("./presentation/routes/partidoRoutes");
const pronosticoRoutes = require("./presentation/routes/pronosticoRoutes");

const app = express();

app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
  }),
);

app.use(express.json());

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/partidos", partidoRoutes);
app.use("/api/pronosticos", pronosticoRoutes);

module.exports = app;
