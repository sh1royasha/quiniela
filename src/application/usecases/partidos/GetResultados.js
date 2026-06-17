class GetResultados {
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    return await this.repository.getResultados();
  }
}

module.exports = GetResultados;
