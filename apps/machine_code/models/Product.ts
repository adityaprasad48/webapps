import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: String,
  stock: Number,
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);