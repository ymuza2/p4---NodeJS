const graphql = require("graphql");
const gnx = require("@simtlix/gnx");
const Employee = require("../models/employees").Employee;
const SexTypeEnum = require("./enums/sex.enum");

const Date = require('../plugins/auditablePluginSchema');

const {
  AuditableObjectFields,
} = require("./extended_types/auditableGraphQLObjectType");

const {
  CantRepeatName,
  CantDeleteAuthorWithBooks,
} = require('../validations/employee.validation');


const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} = graphql;



const EmployeeType = new GraphQLObjectType({
  name: "EmployeeType",
  description: "Represent Employees",
  extensions: {
    validations: {
      UPDATE: [CantRepeatName],
    },
  }, 
  fields: () =>
    Object.assign(AuditableObjectFields, {
      dni: { type: GraphQLInt },  
      birth_date: { type:  GraphQLString},
      first_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      gender: { type: SexTypeEnum },
      hire_date: { type:GraphQLInt },
    }),
});

gnx.connect(Employee, EmployeeType, 'Employee', 'Employees');

module.exports = EmployeeType;