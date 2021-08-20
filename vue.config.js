var path = require('path');
const DataHub = require('macaca-datahub');

const datahubConfig = {
    port: 5678,
    hostname: '127.0.0.1',
    store: path.join(__dirname, '.', 'data'),
    proxy: {
      '/api': {
        hub: 'sample',
      },
    },
    showBoard: true,
  };

  const defaultDatahub = new DataHub({
    port: datahubConfig.port,
  });
  console.log(defaultDatahub);
  defaultDatahub.startServer();
module.exports = {
  lintOnSave: false
}