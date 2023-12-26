import { request, response } from "express";
import { DoctorSchema, EspecialidadSchema } from "../models/index.js";
import reload from "reload";

const get_doctors = async (req, res) => {
  let doctors = await DoctorSchema.findAll({
    include: [
      {
        model: EspecialidadSchema,
        as: "Especialidad",
        attributes: ["id", "especialidad"],
      },
    ],
  });

  return res.status(200).json(doctors);
};

const insert_doctor = async (req = request, res = response, next) => {
  let { especialidadId, nombre, apellido } = req.body;

  try {
    let doctor = new DoctorSchema({ nombre, apellido, especialidadId });
    await doctor.save();
    return res.status(200).json(doctor);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const insertar_especialidad = async (req, res) => {
  let { especialidad } = req.body;

  const add = new EspecialidadSchema({ especialidad: especialidad });
  await add.save();

  return res.status(200).json(add);
};

const doctorBySpeciality = async (req = request, res = response) => {
  let { especialidadId } = req.body;

  try {
    const doctorsFilter = await DoctorSchema.findAll({
      where: { especialidadId: especialidadId },
    });
    if (doctorsFilter == null || doctorsFilter.length == 0) {
      return res.status(404).json({ message: "Not Found" });
    }
    return res.status(200).json(doctorsFilter);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const get_specialities = async (req, res) => {
  try {
    let specliaties = await EspecialidadSchema.findAll();
    return res.status(200).json(specliaties);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export {
  get_doctors,
  insertar_especialidad,
  insert_doctor,
  doctorBySpeciality,
  get_specialities,
};
