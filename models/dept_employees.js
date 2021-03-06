const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dept_employeeFields = {
    
    from_date:String,
    to_date:String,
    empID:Schema.Types.ObjectId
    
};

const Dept_employeeSchema = new Schema(dept_employeeFields);
  
const Dept_employee = mongoose.model('dept_employee', Dept_employeeSchema);
if (!Dept_employee.collection.collection) {
  Dept_employee.createCollection();
}
module.exports = {Dept_employee, dept_employeeFields};