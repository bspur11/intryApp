import mongoose from 'mongoose';

// Define the schema for an inventory item
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  stock_quantity: Number,
});

// Create the model based on the schema
const Item = mongoose.model('Item', itemSchema);

export default Item;
