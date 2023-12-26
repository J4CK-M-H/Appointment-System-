import Sequelize from "sequelize";
import { connection } from "../db/database.js";

const EspecialidadSchema = connection.define(
  "Especialidades",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    especialidad: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

export default EspecialidadSchema;
