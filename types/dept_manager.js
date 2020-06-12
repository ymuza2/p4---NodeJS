const graphql = require("graphql");
const gnx = require("@simtlix/gnx");
const dept_manager = require('../models/dept_manager').dept_manager;
const Employee = require("../models/employees").Employee;
const EmployeeType = require("./employees");
const DeparmentType = require("./departments");

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

const Dept_managerType = new GraphQLObjectType({
  name: "Dept_managerType",
  description: "Represent dept_managers",

  fields: () =>
    Object.assign(AuditableObjectFields, {
      deptID: { type: GraphQLInt },
      from_date: {Type:AuditableObjectFields.createdAt},
      to_date: {Type:AuditableObjectFields.createdAt},
      empID: {
        type: EmployeeType,
        extensions: {
          relation: { connectionField: "empID" },
        },
        resolve(parent, args) {
          return Employee.findById(parent.empID);
        },
      },
    }),
});

gnx.connect(
  dept_manager,
  Dept_managerType,
  "dept_manager",
  "dept_managers"
);

module.exports = Dept_managerType;