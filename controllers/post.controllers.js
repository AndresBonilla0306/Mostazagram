import { request, response } from "express";
import { postModel } from "../models/postModel.js";

const getPost = async (req, res) => {
  try {
    const posts = await postModel.find({});
    res.status(200).json(posts);
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

export { getPost, createPost };
