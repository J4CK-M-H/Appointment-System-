import { request, response } from "express";
import jwt from "jsonwebtoken";
import UsuarioSchema from "../models/usuarioModel.js";

const validarToken = async (req = request, res = response, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      let token = req.headers.authorization.split(" ")[1];
      const { usuario: username } = jwt.verify(token, "MY_SECRET_KEY");
      const usuario = await UsuarioSchema.findOne({
        where: { usuario: username },
        attributes: { exclude: ["password"] },
      });

      req.usuario = usuario.dataValues;
      
      next();
    } catch (error) {
      return res.status(401).json({ message: "Token no valido" });
    }
  } else {
    return res.status(401).json({ message: "No hay token en la peticion" });
  }
};

export default validarToken;
