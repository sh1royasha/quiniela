class GetPartidosCaptura {
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    return await this.repository.getPartidosCaptura();
  }
}

module.exports = GetPartidosCaptura;
