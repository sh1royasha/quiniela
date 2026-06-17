const supabase = require("../database/supabaseClient");

class UsuarioRepository {
  async getAll() {
    return await supabase.schema("mundial").from("USUARIOS").select("*");
  }

  async create(usuario) {
    return await supabase
      .schema("mundial")
      .from("USUARIOS")
      .insert(usuario)
      .select();
  }
}

module.exports = UsuarioRepository;
