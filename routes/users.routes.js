import express from "express";
import { createUser, getUsers } from "../controllers/users.controllers.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validateUser } from "../validators/checks.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", validateUser, createUser);

export default router;
