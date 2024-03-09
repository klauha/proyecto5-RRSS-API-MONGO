import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";
import { createPost } from "../controllers/post.Controller.js";


const router = Router();

router.post('/',auth,createPost)




export default router;