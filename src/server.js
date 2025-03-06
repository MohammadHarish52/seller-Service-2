const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.routes");

dotenv.config();

const app = express();

// CORS configuration allowing both local and production domains
app.use(cors({
  origin: ['http://localhost:3000', 'https://fastandfab.in'], 
  credentials: true, 
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));

// Middleware
app.use(express.json());

// Routes
app.use("/api", authRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
