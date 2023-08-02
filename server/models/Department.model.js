const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Dep_id: {
    type: String, // Assuming the Dep_id is a String type. Change it to the appropriate type if necessary.
    required: true,
    unique : true
  },
});

module.exports = mongoose.model('Department', departmentSchema);
