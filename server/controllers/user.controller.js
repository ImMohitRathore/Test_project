const service = require("../service/User.service");

module.exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400)({
        message: "please fill the data properly",
        status: false,
        data: null,
      });
    }

    var resData = await service.register(req, res);
    console.log("resData", resData);
    return res.status(200).json({
      status: resData.status,
      data: resData.data,
      message: resData.message,
    });
  } catch (e) {
    return res
      .status(400)
      .json({ status: 400, data: e, message: "Request Error!" });
  }
};



exports.login = async function (req, res) {
    try {
  const { email, password } = req.body;
  if ( !email || !password) {
    return res.status(400)({
      message: "please fill the data properly",
      status: false,
      data: null,
    });
  }

  var resData = await service.login(req, res);
  console.log("resData", resData);
  return res.status(200).json({
    status: resData.status,
    data: resData.data,
    message: resData.message,
  });


  } catch (err) {
    console.log("Failed to login user something went wrong!", err);
  }
};

exports.isUserCheck = (req, res) => {
  return res.status(200).json({
    status: 200,
    data: req.rootusr,
    message: "tk available",
  });
};
