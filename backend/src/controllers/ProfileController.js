const connection = require("../database/connection");

module.exports = {
    
  /** Retorna uma lista dos casos de uma ong específica */
  async index(req, res) {
    const ong_id = await req.headers.authorization

    const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*')

    return res.json(incidents)
  },

}