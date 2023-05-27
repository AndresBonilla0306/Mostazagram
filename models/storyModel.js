import mongoose, {Schema, model} from "mongoose";

export const storySchema = Schema({
    photo: { type: String, required: true },
    user: { type: String, required: true },
  });
  
  const storyModel = model("story", storySchema);
  
  export { storyModel };