
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors=require("cors")
const productsRouter = require("./router/product");
const order = require("./router/order")
const ConnectDatabase = require("./config/connectDatabase")
const app = express(); // Correct



dotenv.config({ path: path.join(__dirname, "config", "config.env") });

ConnectDatabase();
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self'; img-src 'self' https://e-commerce-backend-krhi.onrender.com data:;"
    );
    next();
  });

app.use("/api/v1", productsRouter);
app.use("/api/v1", order);

app.listen(process.env.PORT, () => console.log("Server is running..."));

