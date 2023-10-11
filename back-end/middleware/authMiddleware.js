const jwt = require("jsonwebtoken");
const asyncHandler = require("./asyncHandler");
const User = require("../model/userModel");

const userAuth = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Incorrect token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorised, no token");
  }
});

const adminAuth = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorised as an Admin");
  }
};

module.exports = { adminAuth, userAuth };
