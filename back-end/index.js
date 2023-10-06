const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
const productRoutes = require("./routes/productRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const app = express();

app.use(cors());

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
