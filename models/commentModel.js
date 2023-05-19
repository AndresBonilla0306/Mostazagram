import mongoose, {Schema, model} from "mongoose";

export const commentSchema = Schema({
    comment: { type: String, required: true },
    user: { type: String, required: true },
  });
  
  const commentModel = model("comment", commentSchema);
  
  export { commentModel };