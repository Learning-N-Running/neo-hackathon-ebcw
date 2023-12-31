const hre = require("hardhat");
const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const vaultAddress = process.env.VAULT_ADDRESS_NEO;
  const tusdcAddress = process.env.TUSDC_ADDRESS_NEO;

  const mySigner = new ethers.Wallet(
    process.env.NEO_PRIVATE_KEY,
    hre.ethers.provider
  );

  //Amount of token to deposit
  const depositTokenAmount = (200).toString();
  const depositAmount = ethers.parseUnits(depositTokenAmount, 18);

  const Vault = await hre.ethers.getContractFactory("Vault");
  const vault = Vault.attach(vaultAddress); //Connect with already deployed Vault contract

  const tUSDC = await hre.ethers.getContractFactory("MockUSDC");
  const tusdc = tUSDC.attach(tusdcAddress); //Connect with already deployed tUSDC contract

  await tusdc.connect(mySigner).approve(vaultAddress, depositAmount); //Authorize

  const depositTUSDC = await vault.connect(mySigner).deposit(depositAmount);
  await depositTUSDC.wait();

  console.log(
    `Deposited ${depositTokenAmount} tokens to Vault at ${vaultAddress}`
  );
}

main()
  .then(() => (process.exitCode = 0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
