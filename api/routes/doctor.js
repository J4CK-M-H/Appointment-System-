import { Router } from "express";
import {
  doctorBySpeciality,
  get_doctors,
  get_specialities,
  insert_doctor,
  insertar_especialidad,
} from "../controllers/doctorController.js";
import { check } from "express-validator";
import { validarCampos } from "../helpers/validarCampos.js";
const router = Router();
router.get("/get_doctors", get_doctors);
router.post("/agregar_especialidad", insertar_especialidad);
router.post(
  "/insert_doctor",
  [
    check("especialidadId", "El campo especialidadId es obligatorio")
      .not()
      .isEmpty(),
    check("nombre", "El campo nombre es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  insert_doctor
);
router.post("/doctor-by-speciality", doctorBySpeciality);
router.get("/get-specialities", get_specialities);

export default router;
