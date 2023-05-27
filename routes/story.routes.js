import express from "express";
import { getStory, createStory } from "../controllers/story.controllers";

const router = express.Router();

router.get("/", getStory);

router.post("/", createStory);

export default router;