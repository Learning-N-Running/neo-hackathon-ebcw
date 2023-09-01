// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat"); //Q. hre가 뭐임?

async function main() {
  const Vault = await hre.ethers.getContractFactory("Vault");

  const usdcAddress = "0xce221120f145b456ba41b370f11d5e536ecd2bcb"; //WWWW!!!USDC in neo network

  const vault = await Vault.deploy(usdcAddress);
  // await vault.deployed();

  console.log("Vault deployed to:", await vault.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => (process.exitCode = 0)) //Customize
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
