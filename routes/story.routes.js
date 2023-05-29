import express from "express";
import { getStory, createStory } from "../controllers/story.controllers.js";

const router = express.Router();

router.get("/story", getStory);

router.post("/create", createStory);

export default router;