import express from "express";
import {
  createPost,
  getPost,
  getPostID,
} from "../controllers/post.controllers.js";

const router = express.Router();

router.get("/post", getPost);

router.get("/find", getPostID);

router.post("/create", createPost);

export default router;
