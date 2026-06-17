const UsuarioRepository = require("../../infrastructure/repositories/UsuarioRepository");
const GetUsuarios = require("../../application/usecases/usuarios/GetUsuarios");

const repository = new UsuarioRepository();

const getAll = async (req, res) => {
  const useCase = new GetUsuarios(repository);

  const { data, error } = await useCase.execute();

  if (error) return res.status(500).json(error);

  res.json(data);
};

module.exports = {
  getAll,
};
