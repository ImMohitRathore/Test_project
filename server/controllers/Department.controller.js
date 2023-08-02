const service = require("../service/Department.service");

//---signup---
module.exports.addDepartment = async (req, res) => {
  const { name, Dep_id } = req.body;

  try {
    if (!name || !Dep_id ) {
      return res.status(400)({
        message: "please fill the data properly",
        status: false,
        data: null,
      });
    }

    var resData = await service.addDepartment(req, res);
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



module.exports.getDepartents = async (req, res) => {


  try {
    
    var resData = await service.getDepartents(req, res);
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