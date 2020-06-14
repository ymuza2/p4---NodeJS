const graphql = require("graphql");
const gnx = require("@simtlix/gnx");
const dept_employee = require("../models/dept_employees").Dept_employee;
const Employee = require("../models/employees").Employee;
const EmployeeType = require("./employees");


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

const Dept_employeeType = new GraphQLObjectType({
  name: "dept_employeeType",
  description: "Represent dept_employees",

  fields: () =>
    Object.assign(AuditableObjectFields, {
      id:{type: GraphQLID},
      from_date: {type: GraphQLString },
      to_date: {type: GraphQLString},
      empployee: {
        type: EmployeeType,
        extensions: {
          relation: { connectionField: "empID" },
          embedded: false,
        },
        resolve(parent, args) {
          return Employee.findById(parent.empID);
        },
      },
    }),
});

gnx.connect(
  dept_employee,
  Dept_employeeType,
  "dept_employee",
  "dept_employees"
);

module.exports = Dept_employeeType;
