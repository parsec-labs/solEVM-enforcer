require('dotenv').config();
require('babel-register');
require('babel-polyfill');

module.exports = {
  solc: {
    // TODO: the code is supposed to work on constantinople EVM but fails if this is switched on
    // evmVersion: 'constantinople',
    optimizer: {
      enabled: true,
      runs: 2,
    },
  },
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
    coverage: {
      host: 'localhost',
      network_id: '*', // eslint-disable-line camelcase
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
    ganache: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
  },
};
