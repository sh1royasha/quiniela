const express = require("express");
const UsuarioController = require("../controllers/UsuarioController");

const router = express.Router();

router.get("/", UsuarioController.getAll);

module.exports = router;
