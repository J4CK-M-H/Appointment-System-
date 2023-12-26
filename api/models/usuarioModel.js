import { Sequelize } from "sequelize";
import { connection } from "../db/database.js";


const UsuarioSchema = connection.define("Usuarios", {
  nombres: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  usuario: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rol: {
    type: Sequelize.STRING,
    defaultValue: 'USER'
  }
}, {
    timestamps: false,
});

export default UsuarioSchema;
