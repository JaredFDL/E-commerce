const express = require("express");
const router = express.Router();
const orderControllers = require("../controllers/oderControllers");
const { adminAuth, userAuth } = require("../middleware/authMiddleware");

router.get("/", userAuth, adminAuth, orderControllers.getOrders);

router.post("/", userAuth, orderControllers.addOrderItems);

router.post("/myorders", userAuth, orderControllers.getMyOrders);

router.get("/:id", userAuth, orderControllers.getOrderById);

router.patch(
  "/:id/pay",
  userAuth,
  adminAuth,
  orderControllers.updateOrderToPaid
);

router.patch(
  "/:id/deliver",
  userAuth,
  adminAuth,
  orderControllers.updateOrderToDelivered
);

module.exports = router;
