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
 */
function buildSignedTx(to, data, chainId, hexPrivateKey){
    var tx = {}
    tx[to] = to
    tx[data] = data
}

/**
 * 借助EIP-712协议为交易进行签名，得到一笔已签名交易
 */
 function buildSignedTx(to, funcSig, args, nonce, chainId, hexPrivateKey){
    //1.构建原始交易
    //2.对交易进行摘要
    //3.对摘要进行哈希    
}



