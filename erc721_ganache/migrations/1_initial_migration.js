const ERC721 = artifacts.require("HoJinNFT");
module.exports = function (deployer) {
  deployer.deploy(ERC721);
};
