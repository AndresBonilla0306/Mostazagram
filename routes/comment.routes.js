import express from "express";
import { createComment, getComment } from "../controllers/comment.controllers.js";

const router = express.Router();

router.get("/", getComment);

router.post("/", createComment);

export default router;