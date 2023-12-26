import DoctorSchema from "./doctorModel.js";
import EspecialidadSchema from "./especialidadModel.js";

DoctorSchema.belongsTo(EspecialidadSchema, {
  as: "Especialidad",
  foreignKey: {
    name: "especialidadId",
  },
});

// DoctorSchema.hasOne(EspecialidadSchema, { foreignKey: { name: "especialidadId" } });

export { DoctorSchema, EspecialidadSchema };
