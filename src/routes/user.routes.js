import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import { getUsers } from "../controllers/user.controller.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";

const router = Router();

router.get('/',auth, isSuperAdmin, getUsers)


export default router;