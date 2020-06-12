const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const titleFields = {
    
    from_date:String,
    to_date:String,
    title:String,
    empID:Schema.Types.ObjectId
    
};

const titleSchema = new Schema(titleFields);
  
const Title = mongoose.model('Title', titleSchema);
if (!Title.collection.collection) {
  Title.createCollection();
}
module.exports = {Title, titleFields};