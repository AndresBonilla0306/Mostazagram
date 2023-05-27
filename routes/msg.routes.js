import express from "express";
import { getMsg, createMsg } from "../controllers/msg.controllers";

const router = express.Router();

router.get("/", getMsg);

router.post("/", createMsg);

export default router;