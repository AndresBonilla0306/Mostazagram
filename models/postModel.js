import mongoose, { Schema, model } from "mongoose";
import { userModel } from "./userModel.js";

export const postSchema = Schema({
  photo: { type: String, required: true },
  desc: { type: String, required: true },
  user: [{ type: Schema.Types.ObjectId, ref: userModel, required: true }],
});

const postModel = model("Posts", postSchema);

export { postModel };
