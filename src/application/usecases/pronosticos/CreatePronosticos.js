class CreatePronostico {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(pronostico) {
    return await this.repository.create(pronostico);
  }
}

module.exports = CreatePronostico;
