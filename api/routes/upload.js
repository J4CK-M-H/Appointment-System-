import { Router } from "express";
import { cargar_archivo, generarExcel } from "../controllers/uploads.js";

const router = Router();

router.post('/cargar_archivo', cargar_archivo)
router.get('/generar_excel', [generarExcel])


export default router;