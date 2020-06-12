const graphql = require('graphql');

const {
  GraphQLEnumType,
} = graphql;

const SexTypeEnum = new GraphQLEnumType({ //
  name: 'SexTypeEnum',
  values: { //esto te va a dar un hint desde graphql para M o F. En la base va a guardar o Masculine o Femenine.
    M: {
      value: 'Masculine',
    },
    F: {
      value: 'Femenine',
    }
  },
});

module.exports = SexTypeEnum;
