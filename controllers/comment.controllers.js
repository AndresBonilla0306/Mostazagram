import { request, response } from "express";
import { commentModel } from "../models/commentModel.js";
import { postModel } from "../models/postModel.js";

const getComment = async (request, response) => {
  try {
    const { _id } = request.body;
    // console.log(_id);
    const comments = await commentModel.find({ postId: _id });
    response.send(comments);
  } catch (error) {
    // Manejo de errores si ocurre algún problema en la consulta a la base de datos
    console.error("Error al obtener los comentarios:", error);
    response.status(500).send("Error al obtener los comentarios");
  }
};
const createComment = async (req = request, res = response) => {
  const { rate, comment, user, post } = req.body;
  try {
    const existePost = await postModel.findById(post);
    if (!existePost) {
      return res
        .status(404)
        .json({ error: `El post con id ${post} no existe pa` });
    }
    const newComment = new commentModel({ comment, user, post });
    if (!existePost.rate) {
      existePost.rate = rate;
    } else {
      const newRate = (existePost.rate + rate) / 2;
      existePost.rate = newRate.toFixed(2);
    }
    await newComment.save();
    existePost.comment.push(newComment);
    await existePost.save();
    return res.json({ msg: newComment });
  } catch (error) {
    console.log(error);
    res.status(502).json({ msg: "Shit" });
  }
};

export { getComment, createComment };
