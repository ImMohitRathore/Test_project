const Department = require("../models/Department.model");
const bcrypt = require("bcrypt");

exports.addDepartment = async (req, res) => {
  let responseData = {};
  try {
    

      const dep = new Department({
        name: req.body.name,
        Dep_id: req.body.Dep_id,
       
      });

      const dataSave = await dep.save();

      // console.log("daat->"  ,dataSave);
      responseData = {
        data: dataSave,
        status: true,
        message: "Department add  sucessfully",
      };

  } catch (e) {
    console.log(e);
    responseData = {
      data: `sonmething is wrong!! ${e}`,
      status: false,
      message: "sonmething is wrong!!",
    };
  }

  return responseData;
};

exports.getDepartents = async (req, res) => {
  let responseData = {};
  try {
    
    const data = await Department.find({})

      // console.log("daat->"  ,dataSave);
      responseData = {
        data: data,
        status: true,
        message: null,
      };

  } catch (e) {
    console.log(e);
    responseData = {
      data: `sonmething is wrong!! ${e}`,
      status: false,
      message: "sonmething is wrong!!",
    };
  }

  return responseData;
};
