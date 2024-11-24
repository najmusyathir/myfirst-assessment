const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'myfirst_1',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

