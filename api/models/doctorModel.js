import Sequelize from "sequelize";
import { connection } from "../db/database.js";

const DesertorSchema = connection.define("Doctores", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  apellido: {
    type: Sequelize.STRING,
    allowNull: false,
 }
  
}, {
    timestamps: false,
});

export default DesertorSchema;
