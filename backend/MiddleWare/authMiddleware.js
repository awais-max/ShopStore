import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModal.js";

// protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;
  // Read the JWT from cookie
  token = req.cookies.jwt;
  if (token) {
    // Verify the JWT
    // decode is now userId
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);

      res.status(401);
      throw new Error("Not Authorized", "token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized", "no token");
  }
});
// admin MiddleWare
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not Authorized as Admin");
  }
};

export { admin, protect };
