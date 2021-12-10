require("dotenv").config();
const KEY = process.env.KEY;
const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const URL = "https://api.baobab.klaytn.net:8651";
module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    baobab: {
      provider: new HDWalletProvider(KEY, URL),
      network_id: 1001,
      gas: 200000000,
      gasPrice: 25000000000,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.7",
      setting: {
        evmVersion: "london",
      },
    },
  },
};
