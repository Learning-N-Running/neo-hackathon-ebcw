const hre = require("hardhat");

async function main() {
  tUSDC = await ethers.getContractFactory("MockUSDC");
  tusdc = await tUSDC.deploy();

  console.log("tUSDC deployed to:", await tusdc.getAddress());
}

main()
  .then(() => (process.exitCode = 0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
