import mongoose, { Schema, model } from "mongoose";
import { postModel } from "./postModel.js";

export const userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  user: { type: String, required: true },
  pass: { type: String, required: true },
  pass: { type: String, required: false },
  desc: { type: String, required: false },
  post: [{ type: Schema.Types.ObjectId, ref: "Posts", required: false }],
  photo: { type: String, required: false },
});

const userModel = model("User", userSchema);

export { userModel };
