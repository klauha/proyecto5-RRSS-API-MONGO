import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { auth } from "../middlewares/auth.js";


const router = Router();

router.post('/register', register)
router.post('/login', login)

export default router;