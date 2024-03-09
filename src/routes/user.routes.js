import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import { getProfile, getUsers } from "../controllers/user.controller.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";

const router = Router();

router.get('/',auth, isSuperAdmin, getUsers)
router.get('/profile',auth, getProfile)


export default router;