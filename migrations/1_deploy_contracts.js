const MoodDiary = artifacts.require("MoodDiary");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(MoodDiary).then(function(instance) {
    console.log("MoodDiary contract deployed at address:", instance.address);
  });
};