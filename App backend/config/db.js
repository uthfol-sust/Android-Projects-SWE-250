const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.log("MongoDB connection error:", err));


module.exports = mongoose;