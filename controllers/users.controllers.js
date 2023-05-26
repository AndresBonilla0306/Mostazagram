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
const loginUsuario = async (req, res = express.request) => {};
const revalidarToken = async (req, res = express.request) => {};
export { getUser, createUser, loginUsuario, revalidarToken };
