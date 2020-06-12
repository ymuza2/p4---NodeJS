const graphql = require("graphql");
const gnx = require("@simtlix/gnx");
const Salary = require("../models/salaries").Salary;
const SexTypeEnum = require("./enums/sex.enum");

const Date = require("../plugins/auditablePluginSchema");

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

const SalaryType = new GraphQLObjectType({
  name: "SalaryType",
  description: "Represent salarys",
  extensions: {
  },
  fields: () =>
    Object.assign(AuditableObjectFields, {
      salary: { type: GraphQLInt },
      from_date: { type: GraphQLString }, //BUSCAR UN METODO U ESCALAR DEL TIPO 'DATE'.
      to_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      gender: { type: SexTypeEnum },
      hire_date: { type: GraphQLInt },
    }),
});

gnx.connect(Salary, SalaryType, "Salary", "Salaries");

module.exports = SalaryType;
