const market = artifacts.require("NFTMarketplace");

module.exports = function (deployer) {
  deployer.deploy(market);
};
