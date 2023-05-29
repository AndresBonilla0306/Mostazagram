import { request, response } from "express";
import { userModel } from "../models/userModel.js";
import { enviarEmail } from "../helpers/SendMail.js";
import bcrypt from "bcrypt";
import { generarJWT } from "../helpers/jwt.js";
import { postModel } from "../models/postModel.js";

const getUser = async (request, response) => {
  try {
    const { id } = request;
    console.log(id);
    const data = await userModel
      .findOne({ id })
      .populate([{ path: "post" }])
      .exec();
    // console.log(data);
    response.send(data);
  } catch (error) {
    // Manejo de errores si ocurre algún problema en la consulta a la base de datos
    console.error("Error al obtener los datos:", error);
    response.status(500).send("Error al obtener los datos ");
  }
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

const editUser = async (req = request, res = response) => {
  const { _id, name, descript, user, photo } = req.body;
  console.log(_id);
  console.log(name);
  console.log(descript);
  console.log(user);
  console.log(photo);
  try {
    const updateUser = await userModel.findOneAndUpdate(
      { _id: _id },
      {
        $set: {
          name: name,
          desc: descript,
          user: user,
          photo: photo,
        },
      },
      { new: true } // Devuelve el documento actualizado
    );
    await updateUser.save();
    return res.json({ msg: updateUser });
  } catch (error) {
    console.log(error);
    res.status(502).json({ msg: "Shit" });
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

const actualizarPhoto = async (req, res = express.request) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id).populate("user", "_id");

    if (!user) {
      return res.status(404).json({
        ok: false,
        task: "No hay users en DB",
      });
    }

    if (user.user.id !== req.uid) {
      return res.status(403).json({
        ok: false,
        msg: "No puedes ver esta tarea",
      });
    }

    const { urlPhoto } = req.body;
    const updatedPhoto = await userModel.findByIdAndUpdate(
      id,
      { urlPhoto },
      { new: true }
    );

    res.json({
      ok: true,
      updatedTask: updatedPhoto,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      task: "Internal Error",
    });
  }
};

export {
  getUser,
  createUser,
  loginUsuario,
  revalidarToken,
  actualizarPhoto,
  editUser,
};
