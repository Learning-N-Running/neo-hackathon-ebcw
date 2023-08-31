// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDC is ERC20 {
    constructor() ERC20("MockUSDC","mUSDC"){
        _mint(msg.sender, 1000000 * 10 ** decimals()); //Q. 왜 100000이나 발급해줌?
    }

    function mint(address to, uint256 amount) public{
        _mint(to, amount);
    }
    function returnContractAddress() view external returns(address) {
        return address(this);
    }
}
