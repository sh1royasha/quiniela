class CreatePronosticoMasivo {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(pronosticos) {
    return await this.repository.createMasivo(pronosticos);
  }
}

module.exports = CreatePronosticoMasivo;
