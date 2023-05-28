import express from "express";
import { createPost,getPost } from "../controllers/post.controllers.js";

const router = express.Router();

router.get("/post", getPost);

router.post("/create", createPost);

export default router;