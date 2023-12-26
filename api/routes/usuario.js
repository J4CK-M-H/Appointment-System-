import { Router } from "express";
import {
  insertarUsuario,
  obtenerUsuarios,
} from "../controllers/usuarioController.js";
import validarToken from "../middlewares/verificar-token.js";
import { tieneRol } from "../middlewares/verificar-rol.js";
import { esAdmin } from "../middlewares/admin-rol.js";

const router = Router();

router.get("/obtener-usuarios", [
  validarToken,
  // tieneRol("ADMIN", "ADMINISTRACION", "ENFERMERIA"),
  obtenerUsuarios,
]);
router.get("/insertar-usuario", validarToken, [esAdmin, insertarUsuario]);

export default router;
