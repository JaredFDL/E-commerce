const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/users");
const products = require("./data/products");
const User = require("./model/userModel");
const Product = require("./model/productModel");
const Order = require("./model/orderModel");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });
    await Product.insertMany(sampleProducts);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

importData();
