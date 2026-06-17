const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./presentation/routes/usuarioRoutes");
const partidoRoutes = require("./presentation/routes/partidoRoutes");
const pronosticoRoutes = require("./presentation/routes/pronosticoRoutes");

const app = express();

app.use(
  cors({
    origin: ["https://quiniela-frontend-53gc.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/partidos", partidoRoutes);
app.use("/api/pronosticos", pronosticoRoutes);

module.exports = app;
