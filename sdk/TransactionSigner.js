/**
 * define a struct for tx
 */
const txPrototype = {
    signer:'0xbebe',
    to:'0xbebe',
    data:null,
    nonce:0,
    chainId:0,
    rsv:null
}
/**
 * 借助EIP-712协议为交易进行签名，得到一笔已签名交易
 * @param {} tx 
 */
function buildSignedTx(to, data, nonce, chainId, hexPrivateKey){
    
}

/**
 * 借助EIP-712协议为交易进行签名，得到一笔已签名交易
 * @param {} tx 
 */
 function buildSignedTx(to, funcSig, args, nonce, chainId, hexPrivateKey){
    
}
