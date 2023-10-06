const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../model/productModel");

// @desc  Fetch all products
// @route Get /api/products
// @access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc  Fetch a product by pid
// @route Get /api/products/:pid
// @access public
const getProductById = asyncHandler(async (req, res) => {
  const pid = req.params.pid;
  const product = await Product.findById(pid);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

module.exports = { getProductById, getProducts };
