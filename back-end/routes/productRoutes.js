const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productControllers");

router.get("/", productControllers.getProducts);

router.get("/:pid", productControllers.getProductById);

module.exports = router;
