import express from "express";
import {
  createUser,
  getUser,
  revalidarToken,
  loginUsuario,
} from "../controllers/users.controllers.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validateUser } from "../validators/checks.js";
import { validarJWT } from "../middlewares/validar-token.js";

const router = express.Router();

router.post("/", loginUsuario);

// router.get("/", getUser);

export default router;
