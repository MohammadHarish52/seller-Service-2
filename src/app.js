const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const publicRoutes = require("./routes/public.routes");

// Routes
app.use("/auth", authRoutes);
app.use("/product", productRoutes);
app.use("/", publicRoutes);
