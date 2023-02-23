import mongoose from "mongoose";

let schema = new mongoose.Schema({
    name: { type: String, required: true },
    detail: { type: String, required: true },
    admin_id: { type: mongoose.Types.ObjectId, ref:'users', required: true }
})

let Category = mongoose.model("categories", schema);
export default Category;