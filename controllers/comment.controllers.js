import { request, response } from "express";
import { commentModel } from "../models/commentModel.js";

const getComment = async (request, response) => {
  try {
    const { _id } = request.body;
    const comments = await commentModel
      .find({ postId: _id })
      .populate([{ path: "comment" }])
      .exec();
    response.send(comments);
  } catch (error) {
    // Manejo de errores si ocurre algún problema en la consulta a la base de datos
    console.error("Error al obtener los comentarios:", error);
    response.status(500).send("Error al obtener los comentarios");
  }
};
const createComment = async (req = request, res = response) => {
  const { comment, user, post } = req.body;
  try {
    const newComment = new commentModel({ comment, user, post });
    await newComment.save();
    return res.json({ msg: newComment });
  } catch (error) {
    console.log(error);
    res.status(502).json({ msg: "Shit" });
  }
};

export { getComment, createComment };
