/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize');

class PositionsServices {
  constructor() {}

  async find() {
    const query = 'SELECT * FROM cargos';

    const [data] = await sequelize.query(query);
    return data;
  }

  async findOne(id) {
    const query = `SELECT * FROM cargos WHERE id_cargo = ${id}`

    const [data] = await sequelize.query(query)
    return data
  }

  async create(data) {
    let { nombre, id_gerencia, id_direccion } = data;
    const estado = '1';

    if (id_direccion === '') {
      id_direccion = null;
    }

    const queryRes = await sequelize.query(
      'INSERT INTO cargos (nombre, estado, id_gerencia, id_direccion) VALUES(:nombre, :estado, :id_gerencia, :id_direccion)',
      {
        replacements: { nombre, estado, id_gerencia, id_direccion },
      }
    );
    return queryRes;
  }
}

module.exports = PositionsServices;
