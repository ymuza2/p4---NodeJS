
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaryFields = {
    
    from_date:String,
    to_date:String,
    salary:Number,
    empID:Schema.Types.ObjectId
    
};

const salarySchema = new Schema(salaryFields);
  
const Salary = mongoose.model('Salary', salarySchema);
if (!Salary.collection.collection) {
  Salary.createCollection();
}
module.exports = {Salary, salaryFields};