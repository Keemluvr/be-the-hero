const generateUniqueId = require("../utils/generateUniqueId");
const connection = require("../database/connection");

module.exports = {
  /** Retorna uma lista das ONGS cadastradas */
  async index(req, res) {
    const ongs = await connection("ongs").select("*");
    return res.json(ongs);
  },

  /** Insere uma nova ONG */
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  },
};
