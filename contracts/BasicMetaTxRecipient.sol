pragma solidity ^0.6.10;


contract BasicMetaTxRecipient{
    
    //Recover msg.sender from calldata
    function _msgSender() internal view returns(address _sender){
        assembly{
            _sender := shr(96, calldataload(sub(calldatasize(),20)))
        }       
    }
    
}