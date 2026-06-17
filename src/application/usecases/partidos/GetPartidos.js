class GetPartidos {
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    return await this.repository.getAll();
  }
}

module.exports = GetPartidos;
