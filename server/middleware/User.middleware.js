const jwt = require("jsonwebtoken");
const UserProfile = require("../models/user.model");
require('dotenv').config()
const UserMiddleware = async (req, res, next) => {
  try {
    const token = req.body.token;
    // console.log("UserProfile token --->", req.body);

    if (!token) {
      return res.status(400).json({
        status: false,
        data: null,
        message: "Access denied",
      });
    }

    const VerifyToken = jwt.verify(token,process.env.JWTSECRET );
    const rootUser = await UserProfile.findOne({ _id: VerifyToken._id });

    if (!rootUser) {
      return res.status(401).json({
        status: false,
        data: null,
        message: "User not found",
      });
    }

    req.rootUser = rootUser;

    return res.json({
      status: true,
      data: rootUser,
      message: "Token available",
    });
  } catch (error) {
    console.log(error);

    return res.status(403).json({
      status: false,
      data: null,
      message: "Unauthorized access",
    });
  }
};

module.exports = UserMiddleware;