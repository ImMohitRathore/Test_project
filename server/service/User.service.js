const User = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  let responseData = {};
  try {
    console.log("ddd", req.body);
    // return false
    const duplicateData = await User.findOne({ email: req.body.email });
    console.log("ddd", duplicateData);

    if (duplicateData == null) {
      let password = await bcrypt.hashSync(req.body.password, 12);
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: password,
      });

      const dataSave = await user.save();

      // console.log("daat->"  ,dataSave);
      responseData = {
        data: dataSave,
        status: true,
        message: "Registration  sucessfully",
      };
    } else
      responseData = {
        data: null,
        status: false,
        message: "Email already Exist",
      };
  } catch (e) {
    console.log(e);
    responseData = {
      data: `sonmething is wrong!! ${e}`,
      status: false,
      message: "data not  sucessfully",
    };
  }

  return responseData;
};

exports.login = async (req, res) => {
  let reData = {};

  const verifyuser = await User.findOne({ email: req.body.email });

  if (verifyuser != null) {
    const validPassword = await bcrypt.compareSync(
      req.body.password,
      verifyuser.password
    );
    console.log(validPassword);

    if (!validPassword) {
      reData = {
        status: false,
        data: null,
        message: "please check your login credientials!",
      };
    } else {
      console.log("user login ssssssss", verifyuser);
      const token = await verifyuser.genratetoken();
      console.log(token);

      reData = {
        status: true,
        data: { token: token, userData: verifyuser },
        message: "user login successfully",
      };

      //
    }
  } else {
    reData = {
      status: false,
      data: null,
      message: "please check your login credientials!",
    };
    console.log("please check your login credientials");
  }
  return reData;
};
