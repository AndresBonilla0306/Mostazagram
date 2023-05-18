import { request, response } from "express";
import router from "./users.routes";
import { check } from "express-validator";
import { loginUsuario } from "../controllers/users.controllers.js";
import { validarCampos } from "../middlewares/validar-campos.js";

router.post("/", loginUsuario);

router.post(
  "/new",
  [
    check("name", "El nombre es necesario").not().isEmpty(),
    check("email", "El email es necesario").isEmail(),
    check("user", "El user es necesario").not().isEmpty(),
    check("pass", "La pass debe ser se 6 caracteres y obligatoria").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  loginUsuario
);

router.get("/renew", revalidarToken);

export { router };
