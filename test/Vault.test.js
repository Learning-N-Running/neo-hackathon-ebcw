const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Vault with ERC20", function () {
  let MockUSDC, Vault, usdc, vault, owner, addr1, addr2;

  beforeEach(async function () {
    MockUSDC = await ethers.getContractFactory("MockUSDC");
    Vault = await ethers.getContractFactory("Vault");
    [owner, addr1, addr2] = await ethers.getSigners();

    usdc = await MockUSDC.deploy();
    // await usdc.deployed();

    vault = await Vault.deploy(await usdc.getAddress());
    // await vault.deployed();

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

// const { expect } = require("chai");

// describe("Vault with ERC20", () => {
//   let MockUSDC, Vault, owner, addr1, addr2, usdc, vault;

//   beforeEach(async () => {
//     MockUSDC = await ethers.getContractFactory("MockUSDC");
//     Vault = await ethers.getContractFactory("Vault");
//     [owner, addr1, addr2] = await ethers.getSigners();

//     usdc = await MockUSDC.deploy();

//     try {
//       vault = await Vault.deploy(usdc.address);
//     } catch (error) {
//       console.log("안녕핫요");
//       console.log(error);
//     }

//     await usdc.mint(addr1.address, 1000);
//   });

//   describe("Deposit", function () {
//     it("Should deposit tokens into the vault", async () => {
//       await usdc.connect(addr1).approve(vault.address, 500); //addr1의 usdc에 대한 권한을 vault 컨트랙에 부여.
//       await vault.connect(addr1).deposit(500);

//       expect(await vault.deposits(addr1.address)).to.equal(500);
//     });
//   });

//   describe("Withdraw", function () {
//     it("Should withdraw tokens from the vault", async () => {
//       await usdc.connect(addr1).approve(vault.address, 1000); //출금하기 전에 입금부터
//       await vault.connect(addr1).deposit(1000);

//       //   await usdc.connect(addr1).approve(vault.address, 500); ////출금은 vault에서 보내는 것이기때문에 approve 필요 없음
//       await vault.connect(addr1).withdraw(500);

//       expect(await vault.deposits(addr1.address)).to.equal(500);
//       expect(await usdc.balanceOf(addr1.address)).to.equal(500);
//       //addr1은 처음에 1000토큰을 민팅받음 -> 1000토큰을 컨트랙에 입금 -> 500토큰을 컨트랙에서 출금
//       //따라서 addr1의 usdc 잔고는 500일 것.
//     });
//   });
// });
