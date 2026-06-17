const PronosticoRepository = require("../../infrastructure/repositories/PronosticoRepository");

const GetPronosticos = require("../../application/usecases/pronosticos/GetPronosticos");
const CreatePronostico = require("../../application/usecases/pronosticos/CreatePronostico");
const GetPronosticosByUsuario = require("../../application/usecases/pronosticos/GetPronosticosByUsuario");
const CreatePronosticoMasivo = require("../../application/usecases/pronosticos/CreatePronosticoMasivo");

const repository = new PronosticoRepository();

console.log(repository);

console.log(Object.getOwnPropertyNames(PronosticoRepository.prototype));

const getAll = async (req, res) => {
  const useCase = new GetPronosticos(repository);

  const { data, error } = await useCase.execute();

  if (error) return res.status(500).json(error);

  res.json(data);
};

const create = async (req, res) => {
  const useCase = new CreatePronostico(repository);

  const { data, error } = await useCase.execute(req.body);

  if (error) return res.status(500).json(error);

  res.status(201).json(data);
};

const getByUsuario = async (req, res) => {
  const { id } = req.params;

  const useCase = new GetPronosticosByUsuario(repository);

  const { data, error } = await useCase.execute(id);

  if (error) return res.status(500).json(error);

  res.json(data);
};

const createMasivo = async (req, res) => {
  try {
    console.log(repository);
    console.log(typeof repository.createMasivo);

    const pronosticos = req.body;

    const useCase = new CreatePronosticoMasivo(repository);

    const { data, error } = await useCase.execute(pronosticos);

    if (error) {
      return res.status(500).json(error);
    }

    res.status(201).json({
      message: "Pronósticos guardados",
      total: data.length,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json(error);
  }
};

module.exports = {
  getAll,
  create,
  getByUsuario,
  createMasivo,
};
