// import express from 'express';
// import connectDB from '../config/db.js'
// import Item from '../models/item.js'   

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Connect to MongoDB
// connectDB();

// // Example endpoint to fetch all items from the inventory
// app.get('/items', async (req, res) => {
//   try {
//     const items = await Item.find();  // Fetch items from the MongoDB collection
//     res.json(items);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
