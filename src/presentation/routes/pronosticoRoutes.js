const express = require("express");

const PronosticoController = require("../controllers/PronosticoController");

const router = express.Router();

router.get("/", PronosticoController.getAll);

router.post("/", PronosticoController.create);

router.get("/usuario/:id", PronosticoController.getByUsuario);

router.post("/masivo", PronosticoController.createMasivo);

module.exports = router;
