import mongoose, { Schema, model } from "mongoose";
import { userModel } from "./userModel.js";
import { commentModel } from "./commentModel.js";

export const postSchema = Schema({
  photo: { type: String, required: true },
  desc: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  comment: [{ type: Schema.Types.ObjectId, ref: "comment", required: false }],
});

const postModel = model("Posts", postSchema);

export { postModel };
