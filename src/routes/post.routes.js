import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import { updatePost, createPost, deletePostById, getMyPosts, getPosts, getPostById } from "../controllers/post.Controller.js";


const router = Router();

router.post('/',auth,createPost)
router.delete('/:id',auth,deletePostById)
router.put('/:id',auth,updatePost)
router.get('/', auth, getPosts)
router.get ('/own', auth, getMyPosts)
router.get('/:id',auth,getPostById)






export default router;