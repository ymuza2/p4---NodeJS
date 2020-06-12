const graphql = require("graphql");
const gnx = require("@simtlix/gnx");
const dept_manager = require("../models/dept_manager").dept_manager;
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

const Dept_managerType = new GraphQLObjectType({
  name: "Dept_managerType",
  description: "Represent dept_managers",

  fields: () =>
    Object.assign(AuditableObjectFields, {
      from_date: { type: GraphQLString },
      to_date: { type: GraphQLString },
      deptID: { type: GraphQLInt },
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

gnx.connect(dept_manager, Dept_managerType, "dept_manager", "dept_managers");

module.exports = Dept_managerType;
