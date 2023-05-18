import mongoose, {Schema, model} from "mongoose";

export const postSchema = Schema({
    photo: { type: String, required: true },
    desc: { type: String, required: true },
    user: { type: String, required: true },
  });
  
  const postModel = model("Posts", postSchema);
  
  export { postModel };