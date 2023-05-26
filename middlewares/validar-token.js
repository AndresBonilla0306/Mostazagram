// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken";
import { response } from "express";

const validarJWT = (req, res = response, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No hay Token!!!",
    });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);

    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token Inválido",
    });
  }

  next();
};
export { validarJWT };
