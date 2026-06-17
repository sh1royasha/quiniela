const express = require("express");

const PartidoController = require("../controllers/PartidoController");

const router = express.Router();

router.get("/", PartidoController.getAll);

router.put("/:id", PartidoController.updateResultado);

router.get("/captura", PartidoController.getPartidosCaptura);

router.get("/resultados", PartidoController.getResultados);

module.exports = router;
