//Salaries must have empId, salary, from_date, to_date

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salariesFields = {
    
    from_date:Date,
    to_date:Date,
    salary:Number,
    empID:Schema.Types.ObjectId
    
};

const employeeSchema = new Schema(employeeFields);
  
const Employee = mongoose.model('Employee', employeeSchema);
if (!Employee.collection.collection) {
  Employee.createCollection();
}
module.exports = {Employee, employeeFields};