const graphql = require("graphql");
const gnx = require("@simtlix/gnx");
const title = require("../models/titles").Title;
const SexTypeEnum = require("./enums/sex.enum");

const {
  AuditableObjectFields,
} = require("./extended_types/auditableGraphQLObjectType");

/*const {
  CantRepeatName,
  CantDeleteAuthorWithBooks,
} = require('../validations/employee.validation');*/


const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} = graphql;



const TitleType = new GraphQLObjectType({
  name: "TitleType",
  description: "Represent titles",
  extensions: {
   
  }, 
  fields: () =>
    Object.assign(AuditableObjectFields, {
      dni: { type: GraphQLInt },  
      birth_date: { type: AuditableObjectFields.createdAt},//BUSCAR UN METODO U ESCALAR DEL TIPO 'DATE'.
      first_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      gender: { type: SexTypeEnum },
      hire_date: { type:GraphQLInt },
    }),
});

gnx.connect(title, TitleType, 'Title', 'Titles');

module.exports = TitleType;