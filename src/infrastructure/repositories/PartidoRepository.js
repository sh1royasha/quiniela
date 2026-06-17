const supabase = require("../database/supabaseClient");

class PartidoRepository {
  async getAll() {
    return await supabase.schema("mundial").from("PARTIDOS").select("*");
  }

  async updateResultado(idPartido, golesLocal, golesVisita, fechaPartido) {
    return await supabase
      .schema("mundial")
      .from("PARTIDOS")
      .update({
        GOLES_LOCAL: golesLocal,
        GOLES_VISITA: golesVisita,
        FECHA_PARTIDO: fechaPartido,
      })
      .eq("ID_PARTIDO", idPartido)
      .select();
  }

  async getPartidosCaptura() {
    return await supabase
      .schema("mundial")
      .from("VW_PARTIDOS_CAPTURA")
      .select("*");
  }

  async getResultados() {
    return await supabase.schema("mundial").from("VW_RESULTADOS").select("*");
  }
}

module.exports = PartidoRepository;
