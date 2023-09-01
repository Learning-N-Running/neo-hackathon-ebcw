# NEO Hackathon Project: EBCW

## What is EBCW?
EBCW is a SocialFi platform that enables people to connect to Web3 based on real-life actions.

## Overview

This project is a part of the NEO Hackathon and demonstrates the creation of a vault on the NEO EVM chain. The vault allows users to deposit and withdraw tUSDC, an ERC20 token. Participants in the challenge can also receive paybacks upon completion.

## Features

- **NEO EVM Chain**: The project is deployed on the NEO EVM chain, offering fast and secure transactions.
  
- **ERC20 Token (tUSDC)**: The project includes a mock ERC20 token called tUSDC for demonstration purposes.

- **Vault for Deposits**: A secure vault contract is available for challenge participants to deposit their tUSDC tokens.

- **Deposit and Withdraw**: Users can easily deposit and withdraw tUSDC tokens to and from the vault.

- **Payback**: Upon successful completion of the challenge, participants can receive paybacks.

## Contracts

- `MockUSDC.sol`: This contract creates the mock ERC20 token, tUSDC.
  
- `Vault.sol`: This contract creates the vault where users can deposit and withdraw tUSDC.

## Scripts

- `deploy.js`: Deploys the Vault contract.
  
- `deposit.js`: Script to deposit tUSDC into the vault.

- `withdraw.js`: Script to withdraw tUSDC from the vault.

- `tusdc.js`: Deploys the tUSDC contract.

## Tests

- `Vault.test.js`: Contains tests for the Vault contract.

## How to Run

1. Install dependencies <br/>
`npm install`

2. Compile contracts <br/>
`npx hardhat compile`

3. Run tests <br/>
`npx hardhat test`

4. Deploy contracts <br/>
`npx hardhat run scripts/deploy.js`

5. Deposit tUSDC <br/>
`npx hardhat run scripts/deposit.js`

6. Withdraw tUSDC <br/>
`npx hardhat run scripts/withdraw.js`
