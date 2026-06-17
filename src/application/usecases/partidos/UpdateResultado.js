class UpdateResultado {
  constructor(partidoRepository) {
    this.partidoRepository = partidoRepository;
  }

  async execute(idPartido, golesLocal, golesVisita, fechaPartido) {
    return await this.partidoRepository.updateResultado(
      idPartido,
      golesLocal,
      golesVisita,
      fechaPartido,
    );
  }
}

module.exports = UpdateResultado;
