const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Vault with ERC20", function () {
  let MockUSDC, Vault, usdc, vault, owner, addr1, addr2;

  beforeEach(async function () {
    MockUSDC = await ethers.getContractFactory("MockUSDC");
    Vault = await ethers.getContractFactory("Vault");
    [owner, addr1, addr2] = await ethers.getSigners();

    usdc = await MockUSDC.deploy();

    vault = await Vault.deploy(await usdc.getAddress());

    // Mint some Mock USDC tokens to addr1
    await usdc.mint(addr1.address, 1000);
  });

  describe("Deposit", function () {
    it("Should deposit tokens into the vault", async function () {
      await usdc.connect(addr1).approve(await vault.getAddress(), 500);
      await vault.connect(addr1).deposit(500);

      expect(await vault.deposits(addr1.address)).to.equal(500);
    });
  });

  describe("Withdraw", function () {
    it("Should withdraw tokens from the vault", async function () {
      await usdc.connect(addr1).approve(await vault.getAddress(), 1000);
      await vault.connect(addr1).deposit(1000);

      await vault.connect(addr1).withdraw(500);

      expect(await vault.deposits(addr1.address)).to.equal(500);
      expect(await usdc.balanceOf(addr1.address)).to.equal(500);
    });
  });
});
