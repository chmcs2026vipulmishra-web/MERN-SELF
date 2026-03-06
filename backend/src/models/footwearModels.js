import mongoose from "mongoose";

const footwearSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
}, 
{ timestamps: true } 
);

const Footwear = mongoose.model("Footwear", footwearSchema);
export default Footwear;