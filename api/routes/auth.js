import { Router } from "express";
import { login, session } from "../controllers/authController.js";
import verificarToken from '../middlewares/verificar-token.js'

const router = Router();

router.get('/session', verificarToken ,session);
router.post('/login', login);


export default router;