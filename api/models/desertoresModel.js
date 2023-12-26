import { Sequelize } from "sequelize";
import { connection } from "../db/database.js";

const DesertorSchema = connection.define("Desertores", {
  codigo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  periodo: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  semestre: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  paterno: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  materno: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nombres: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sexo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  edad: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  codigo_esp: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  escuela: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  modalidad: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  dni: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  correo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  celular: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  concatenado: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
}, {
    timestamps: false,
});

export default DesertorSchema;
