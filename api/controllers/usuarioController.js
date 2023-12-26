import usuarioSchema from "../models/usuarioModel.js";
import { connection } from "../db/database.js";
import { QueryTypes } from "sequelize";
import UsuarioSchema from "../models/usuarioModel.js";
import DesertorSchema from "../models/desertoresModel.js";

const insertarUsuario = async (req, res) => {
  const nuevo_usuario = await connection.query(
    "INSERT INTO usuarios (nombres,usuario,password,rol) VALUES ('jack','jack98','2698','ADMIN')"
  );

  return res.status(201).json(nuevo_usuario);
};

const obtenerUsuarios = async (req, res) => {
  // const nuevo = new usuarioSchema();
  let usuarios = await DesertorSchema.findAll();
  // const nuevo_usuario = await connection.query(
  //   "SELECT id, ch_dni, CONCAT(ch_nombres,' ', ch_apepat,' ', ch_apemat) AS ch_nombres, es.abrev, ch_validacion, ch_edni, ch_dj, ch_secu, ch_djsecu, ch_p_matricula, ch_p_cuota, ch_estado_alu FROM checking_admision INNER JOIN especialidad es ON ch_codesp = es.codesp WHERE ch_validacion = 1 ORDER BY id ASC",
  //   {
  //     type: QueryTypes.SELECT,
  //     raw: false,
  //   }
  // );
  return res.status(200).json(usuarios);
};

export { obtenerUsuarios, insertarUsuario };
