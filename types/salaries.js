const graphql = require("graphql");
const gnx = require("@simtlix/gnx");
const Salary = require("../models/salaries").Salary;
const EmployeeType = require("./employees");
const Employee = require("../models/employees");
const DepartmentType = require('../models/departments').department;

const Date = require("../plugins/auditablePluginSchema");

const {
  AuditableObjectFields,
} = require("./extended_types/auditableGraphQLObjectType");
const { department } = require("../models/departments");

const {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLInt,
} = graphql;

const SalaryType = new GraphQLObjectType({
  name: "SalaryType",
  description: "Represent salaries",
  extensions: {},
  fields: () =>
    Object.assign(AuditableObjectFields, {
      id: { type: GraphQLID },
      from_date: { type: GraphQLString },
      to_date: { type: GraphQLString },
      salary: { type: GraphQLInt },
      empID: {
        type: EmployeeType,
        extensions: {
          relation: { connectionField: "employee_ID", embedded: false },
        },
        resolve(parent, args) {
          return Employee.findById(parent.employee_ID);
        },
        department: {
          type: DepartmentType,
          extensions: {
            relation: { connectionField: "dept_ID", embedded: false },
          },
          resolve(parent, args) {
            return department.findById(parent.dept_ID);
          },
        },
      },
    }),
});

gnx.connect(Salary, SalaryType, "Salary", "Salaries");

module.exports = SalaryType;
