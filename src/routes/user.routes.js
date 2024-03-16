import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import { getProfile, getUsers, updateProfile } from "../controllers/user.controller.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";
import { getAllUserPosts } from "../controllers/post.Controller.js";

const router = Router();

router.get('/',auth, isSuperAdmin, getUsers)
router.get('/profile',auth, getProfile)
router.put('/profile',auth, updateProfile)
router.get('/posts/:id', auth, getAllUserPosts )


export default router;