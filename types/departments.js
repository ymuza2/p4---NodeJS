const graphql = require("graphql");
const gnx = require("@simtlix/gnx");
const department = require("../models/departments").department;


const {
  AuditableObjectFields,
} = require("./extended_types/auditableGraphQLObjectType");


const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} = graphql;

const DepartmentType = new GraphQLObjectType({
  name: "departmentType",
  description: "Represent departments",
  extensions: {
    },
  fields: () =>
    Object.assign(AuditableObjectFields, {
      name: { type: GraphQLString },
    }),
});

gnx.connect(department, DepartmentType, "department", "departments");

module.exports = DepartmentType;
