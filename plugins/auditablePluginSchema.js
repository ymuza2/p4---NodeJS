module.exports = function(schema, options) {
    schema.add({updatedAt: {type: Date}});
    schema.add({createdAt: {type: Date}});
  
    // This line add automatically createdAt and updatedAt
    schema.set('timestamps', true); //defino asi el schema para poder tener las fechas de update y create.
    // add statics
    // ***
    // add mongoose hoks
    // ***
  };
  