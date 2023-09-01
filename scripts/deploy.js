// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat"); //Q. hre가 뭐임?

async function main() {
  const Vault = await hre.ethers.getContractFactory("Vault");

  const tusdcAddress = process.env.TUSDC_ADDRESS_NEO; //test USDC in neoEvm test network

  const vault = await Vault.deploy(tusdcAddress);

  console.log("Vault deployed to:", await vault.getAddress());
}

main()
  .then(() => (process.exitCode = 0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
