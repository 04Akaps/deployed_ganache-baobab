require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const network = "https://api.baobab.klaytn.net:8651";
const MYKEY = process.env.PRIMARY_KEY;

module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    baobab: {
      provider: new HDWalletProvider(MYKEY, network),
      network_id: 1001,
      gas: 20000000,
      gasPrice: 25000000000,
    },
  },

  mocha: {},

  compilers: {
    solc: {
      version: "0.5.6",
    },
  },
};
