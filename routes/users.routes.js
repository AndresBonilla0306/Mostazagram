import express from "express"
import { getUsers } from "../controllers/users.controllers.js";

const router = express.Router();

router.get("/", getUsers)

export default router;