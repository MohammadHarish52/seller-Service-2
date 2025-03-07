const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const publicRoutes = require("./routes/public.routes");

dotenv.config();

const app = express();

// CORS configuration allowing both local and production domains
app.use(
  cors({
    origin: ["http://localhost:3000", "https://fastandfab.in"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/product", productRoutes);
app.use("/", publicRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
