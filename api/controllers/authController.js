import { request, response } from "express";
import UsuarioSchema from "../models/usuarioModel.js";
import { generarJWT } from "../helpers/generar-token.js";


const session = async(req,res) => {

  return res.status(200).json(req.usuario);

};

const login = async(req = request, res = response) => {

  const { username, password } = req.body;

  const validar_usuario = await UsuarioSchema.findOne({ where: { usuario: username, password } });

  if( !validar_usuario ) {
    return res.status(400).json({ message: "Usuario/Password incorrectos" })
  }

  const token = generarJWT(validar_usuario.usuario,validar_usuario.rol);

  let user = { rol: validar_usuario.dataValues.rol, usuario: validar_usuario.dataValues.usuario, nombres: validar_usuario.dataValues.nombres}

  let data_user = { ...user, token }
  return res.status(200).json(data_user);

};

export {
  login,
  session
}