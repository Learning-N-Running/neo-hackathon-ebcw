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

  //Amount of token to withdraw
  const withdrawTokenAmount = (200).toString();
  const withdrawAmount = ethers.parseUnits(withdrawTokenAmount, 18);

  const Vault = await hre.ethers.getContractFactory("Vault");
  const vault = Vault.attach(vaultAddress); //Connect with already deployed Vault contract

  const tUSDC = await hre.ethers.getContractFactory("MockUSDC");
  const tusdc = tUSDC.attach(tusdcAddress); //Connect with already deployed tUSDC contract

  const withdrawTUSDC = await vault.connect(mySigner).withdraw(withdrawAmount);
  await withdrawTUSDC.wait();

  console.log(
    `Withdrew ${withdrawTokenAmount} tokens to Vault at ${vaultAddress}`
  );
}

main()
  .then(() => (process.exitCode = 0)) //Customize
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
