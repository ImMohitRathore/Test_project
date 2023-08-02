const mongoose = require("mongoose");
const jwt  = require("jsonwebtoken")
require('dotenv').config()
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
  Tokens: [
    {
      token: {},
    },
  ],
});

UserSchema.methods.genratetoken = async function () {
    try {
      let tokenMohit = jwt.sign(
        { _id: this._id },
        process.env.JWTSECRET
      );
      this.Tokens = this.Tokens.concat({ token: tokenMohit });
      await this.save();
      // console.log('token in mongo--->',tokenMohit)
      return tokenMohit;
    } catch (e) {
      console.log(e);
    }
  };
module.exports = mongoose.model("User", UserSchema);
