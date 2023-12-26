import { response } from "express";

const esAdmin = (req,res = response, next ) => {

  if( req.usuario.rol != 'ADMIN' ) {
    return res.status(401).json({ message: 'El usuario no es administrador.' });
  }

  next();
};

export { esAdmin }