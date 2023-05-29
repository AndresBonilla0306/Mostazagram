import express from "express";
import {
  createComment,
  getComment,
} from "../controllers/comment.controllers.js";

const router = express.Router();

router.get("/comment", getComment);

router.post("/create", createComment);

export default router;
