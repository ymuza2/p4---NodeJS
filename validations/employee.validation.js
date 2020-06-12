const gnx = require('@simtlix/gnx');
const GNXError = gnx.GNXError; //manejo de errores de gnx.
const {Employee} = require('../models/employees');



const CantRepeatName ={ // trae el modelo de autores, 
    validate: async function(typeName, originalObject, materializedObject) {
        const EmployeeFinded =
        await Employee.findOne({'name': materializedObject.name}); /* FUNCIONES DE MONGOOSE. Defino el campo por el cual hacer el filtro.  materializedObject.name =>es el
         nombre que me mando el cliente, entonces lo busca en la base y va a corroborar que el id sea distinto.*/
       
        if (EmployeeFinded && EmployeeFinded._id != materializedObject.id) {
            throw new CantUpdateEmployeeWithNameUsedError(typeName);
        }
    }};
  class CantUpdateEmployeeWithNameUsedError extends GNXError {
    constructor(typeName) {
      super(typeName,'Name cant be repeated', 'CantUpdateEmployeeWithNameUsedError');
    }
  };

 

  const executeAuditableOnUpdating = async (objectId, modifiedObject) => {
    const promotionModel = gnx.getModel(PromotionType);
    return AuditableGraphQLObjectTypeController.onUpdating(
      objectId, modifiedObject, promotionModel
    );
  };



  module.exports ={
    CantRepeatName,
    
  };
  