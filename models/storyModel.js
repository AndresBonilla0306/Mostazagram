import mongoose, { Schema, model } from "mongoose";
import { userModel } from "./userModel.js";

export const storySchema = Schema({
  photo: { type: String, required: true },
  user: [{ type: Schema.Types.ObjectId, ref: userModel, required: true }],
});

const storyModel = model("story", storySchema);

export { storyModel };
