const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const { adminAuth, userAuth } = require("../middleware/authMiddleware");

router.get("/", userAuth, adminAuth, userControllers.getUsers);

router.post("/", userControllers.registerUser);

router.post("/logout", userControllers.logoutUser);

router.post("/login", userControllers.loginUser);

router.get("/profile", userAuth, userControllers.getUserProfile);

router.put("/profile", userAuth, userControllers.updateUserProfile);

router.get("/:id", userAuth, adminAuth, userControllers.getUserById);

router.delete("/:id", userAuth, adminAuth, userControllers.deleteUser);

router.put("/:id", userAuth, adminAuth, userControllers.updateUser);

module.exports = router;
