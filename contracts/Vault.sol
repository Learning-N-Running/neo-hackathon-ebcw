// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vault {
    IERC20 public token; //Q. IERC20 의문
    mapping (address => uint256) public deposits;

    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    constructor (address _token) {
        token = IERC20(_token);
    }

    function deposit(uint256 amount) external{
        require(token.transferFrom(msg.sender, address(this),amount), "Transfer failed");
        deposits[msg.sender]+=amount;
        emit Deposited(msg.sender, amount);
    }

    function withdraw(uint256 amount) external {
        require(deposits[msg.sender]>=amount, "Insufficient balance");
        require(token.transfer(msg.sender, amount), "Transfer failed");
        deposits[msg.sender] -= amount;
        emit Withdrawn(msg.sender, amount);
    }
}