import { request, response } from "express";
import { postModel } from "../models/postModel.js";
import { userModel } from "../models/userModel.js";

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

const createPost = async (req = request, res = response) => {
  const { rate, photo, desc, user } = req.body;
  try {
    const existeUser = await userModel.findById(user);
    if (!existeUser) {
      return res
        .status(404)
        .json({ error: `El user con id ${user} no existe pa` });
    }
    const newPost = new postModel({ photo, desc, user });
    if (!existeUser.rate) {
      existeUser.rate = rate;
    } else {
      const newRate = (existeUser.rate + rate) / 2;
      existeUser.rate = newRate.toFixed(2);
    }
    existeUser.post.push(newPost);
    await existeUser.save();
    await newPost.save();
    return res.json({ msg: newPost });
  } catch (error) {
    console.log(error);
    res.status(502).json({ msg: "Pero madre mía Willy" });
  }
};

export { getPost, createPost };
