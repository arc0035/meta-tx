pragma solidity ^0.6.10;


import "./BasicMetaTxReceipient.sol";

contract DemoRecipient is BasicMetaTxRecipient{
    
    uint private state;
    event Set(uint a, address sender);
    function set(uint256 a) public{
        state = a;
        emit Set(a, _msgSender());
    } 
    
    function get() public view returns(uint){
        return state;
    }
    
    
}