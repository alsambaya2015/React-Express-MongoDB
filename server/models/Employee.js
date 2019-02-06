// Employee.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Employee = new Schema({
  name: {  type: String  },
  code: {  type: String  },
  profession: {  type :String  },
  color: {   type: String  },
  city: { type: String },
  branch: { type: String },
  assigned: { type : String }
},{
    collection: 'employees'
});

module.exports = mongoose.model('Employee', Employee);