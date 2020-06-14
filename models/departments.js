const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentFields = {
    
    dept_name:String
       
};

const departmentSchema = new Schema(departmentFields);
  
const department = mongoose.model('department', departmentSchema);
if (!department.collection.collection) {
  department.createCollection();
}
module.exports = {department, departmentFields};