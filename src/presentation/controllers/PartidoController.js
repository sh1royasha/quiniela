const PartidoRepository = require("../../infrastructure/repositories/PartidoRepository");

const GetPartidos = require("../../application/usecases/partidos/GetPartidos");
const UpdateResultado = require("../../application/usecases/partidos/UpdateResultado");
const GetPartidosCaptura = require("../../application/usecases/partidos/GetPartidosCaptura");
const GetResultados = require("../../application/usecases/partidos/GetResultados");

const repository = new PartidoRepository();

const getAll = async (req, res) => {
  const useCase = new GetPartidos(repository);

  const { data, error } = await useCase.execute();

  if (error) return res.status(500).json(error);

  res.json(data);
};

const updateResultado = async (req, res) => {
  const { id } = req.params;

  const { GOLES_LOCAL, GOLES_VISITA, FECHA_PARTIDO } = req.body;

  console.log(req.body);

  const useCase = new UpdateResultado(repository);

  const { data, error } = await useCase.execute(
    id,
    GOLES_LOCAL,
    GOLES_VISITA,
    FECHA_PARTIDO,
  );

  console.log(data);
  console.log(error);

  if (error) return res.status(500).json(error);

  res.json(data);
};

const getPartidosCaptura = async (req, res) => {
  const useCase = new GetPartidosCaptura(repository);

  const { data, error } = await useCase.execute();

  if (error) return res.status(500).json(error);

  res.json(data);
};

const getResultados = async (req, res) => {
  const useCase = new GetResultados(repository);

  const { data, error } = await useCase.execute();

  if (error) return res.status(500).json(error);

  res.json(data);
};

module.exports = {
  getAll,
  updateResultado,
  getPartidosCaptura,
  getResultados,
};
