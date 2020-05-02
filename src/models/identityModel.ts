import mongoose, { model, Schema } from "mongoose";

const identitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export default model("identity", identitySchema);
