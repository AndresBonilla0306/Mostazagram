import { request, response } from "express";
import { userModel } from "../models/userModel.js";
import { enviarEmail } from "../helpers/SendMail.js";
import bcrypt from "bcrypt";
import { generarJWT } from "../helpers/jwt.js";

const getUser = (request, response) => {
  response.send("Muy buenas a todos guarrisimos");
};
const createUser = async (req = request, res = response) => {
  const { name, email, user, pass } = req.body;
  try {
    const newUser = new userModel({ name, email, user, pass });
    const salt = bcrypt.genSaltSync();
    newUser.pass = bcrypt.hashSync(pass, salt);
    await newUser.save();
    await enviarEmail(newUser);
    return res.json({ msg: newUser });
  } catch (error) {
    console.log(error);
    res.status(502).json({ msg: "algo" });
  }
};
const loginUsuario = async (req, res = express.request) => {
  const { user, pass } = req.body;

  try {
    let usuario = await userModel.findOne({ user: user });
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario NO existe en la DB",
      });
    }

    const passwordValid = bcrypt.compareSync(pass, usuario.pass);
    if (!passwordValid) {
      return res.status(400).json({
        ok: false,
        msg: "El password NO es válido",
      });
    }

    const token = await generarJWT(usuario.id, usuario.name);

    res.status(200).json({
      ok: true,
      usuario,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error,
    });
  }
};
const revalidarToken = async (req, res = express.request) => {
  const { uid, name } = req;

  const token = await generarJWT(uid, name);

  res.json({
    ok: true,
  });
};
export { getUser, createUser, loginUsuario, revalidarToken };
