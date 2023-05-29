import { request, response } from "express";
import { postModel } from "../models/postModel.js";

const getPost = async (req, res) => {
  try {
    const posts = await postModel
      .find({})
      .populate([{ path: "comment", populate: "user" }])
      .exec();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(502).json({ msg: "Pero madre mía Willy" });
  }
};

const getPostID = async (req, res) => {
  try {
    const postId = req.params.id; // Obtén el ID del post deseado desde los parámetros de la solicitud

    const post = await postModel
      .findById(postId) // Utiliza el método findById para buscar el post por su ID
      .populate([{ path: "comment", populate: "user" }])
      .exec();

    if (!post) {
      return res.status(404).json({ msg: "Post no encontrado" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(502).json({ msg: "Pero madre mía Willy" });
  }
};

const createPost = async (req = request, res = response) => {
  const { photo, desc, user } = req.body;
  try {
    const newPost = new postModel({ photo, desc, user });
    await newPost.save();
    return res.json({ msg: newPost });
  } catch (error) {
    console.log(error);
    res.status(502).json({ msg: "Pero madre mía Willy" });
  }
};

export { getPost, createPost, getPostID };
