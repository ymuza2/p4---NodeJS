const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dept_managerFields = {
    
    from_date:Date,
    to_date:Date,
    deptID:Schema.Types.ObjectId,
    empID:Schema.Types.ObjectId
    
};

const dept_managerSchema = new Schema(dept_managerFields);
  
const dept_manager = mongoose.model('dept_manager', dept_managerSchema);
if (!dept_manager.collection.collection) {
  dept_manager.createCollection();
}
module.exports = {dept_manager, dept_managerFields};