require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_API_URL = process.env.SEPOLIA_API_URL;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const NEO_PRIVATE_KEY = process.env.NEO_PRIVATE_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.19",
  networks: {
    neoEvmTestnet: {
      url: "https://evm.ngd.network:32332", // 네트워크 URL
      chainId: 2970385, // 체인 ID
      accounts: [NEO_PRIVATE_KEY], // 개인 키
    },
    sepolia: {
      url: SEPOLIA_API_URL,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`],
    },
  },
};
