import { response, request } from "express";
import { storyModel } from "../models/storyModel.js";

const getStory = async (req, res) => {
  try {
    const posts = await storyModel.find({});
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(502).json({ msg: "Pero madre mía Willy" });
  }
};

const createStory = async (req = request, res = response) => {
  const { photo, user } = req.body;
  try {
    const newStory = new storyModel({ photo, user });
    await newStory.save();
    return res.json({ msg: newStory });
  } catch (error) {
    console.log(error);
    res.status(502).json({ msg: "Shit" });
  }
};

export { getStory, createStory };
