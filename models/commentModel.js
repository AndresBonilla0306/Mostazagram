import mongoose, { Schema, model } from "mongoose";
import { userModel } from "./userModel.js";
import { postModel } from "./postModel.js";

export const commentSchema = Schema({
  comment: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  post: [{ type: Schema.Types.ObjectId, ref: "Posts", required: true }],
});

const commentModel = model("comment", commentSchema);

export { commentModel };
