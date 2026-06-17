const supabase = require("../database/supabaseClient");

class PronosticoRepository {
  async create(pronostico) {
    return await supabase
      .schema("mundial")
      .from("PRONOSTICOS")
      .insert(pronostico)
      .select();
  }

  async getAll() {
    return await supabase.schema("mundial").from("PRONOSTICOS").select(`
                ID_PRONOSTICO,
                GOLES_LOCAL,
                GOLES_VISITA,
                USUARIO:USUARIOS(
                    NOMBRE
                ),
                PARTIDO:PARTIDOS(
                    ID_PARTIDO
                )
            `);
  }

  async getByUsuario(idUsuario) {
    return await supabase
      .schema("mundial")
      .from("VW_PRONOSTICOS_USUARIO")
      .select("*")
      .eq("ID_USUARIO", idUsuario);
  }

  async createMasivo(pronosticos) {
    return await supabase
      .schema("mundial")
      .from("PRONOSTICOS")
      .insert(pronosticos)
      .select();
  }
}

module.exports = PronosticoRepository;
