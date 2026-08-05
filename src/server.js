require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;

connectDB();

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Product API is running 🚀"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});