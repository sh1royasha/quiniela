class GetPronosticosByUsuario {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(idUsuario) {
    return await this.repository.getByUsuario(idUsuario);
  }
}

module.exports = GetPronosticosByUsuario;
