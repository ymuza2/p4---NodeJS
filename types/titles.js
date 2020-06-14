const graphql = require("graphql");
const gnx = require("@simtlix/gnx");
const title = require("../models/titles").Title;
const SexTypeEnum = require("./enums/sex.enum");

const {
  AuditableObjectFields,
} = require("./extended_types/auditableGraphQLObjectType");

const EmployeeType = require("./employees");

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
  extensions: {},
  fields: () =>
    Object.assign(AuditableObjectFields, {
      id:{type: GraphQLID},
      from_date: { type: GraphQLString }, 
      to_date: { type: GraphQLString },
      title: { type: GraphQLString },
      empID: {
        type: EmployeeType,
        extensions: {
          relation: { connectionField: "employeeID" },
        },
        resolve(parent, args) {
          return Employee.findById(parent.employeeID);
        },
      },
    }),
});

gnx.connect(title, TitleType, "Title", "Titles");

module.exports = TitleType;
