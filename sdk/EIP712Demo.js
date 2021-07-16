const ethUtil = require('ethereumjs-util');

const typedData={
    types:{
        EIP712Domain:[
            {name: 'name', type:'string'},
            {name: 'version', type:'string'},
            {name: 'chainId', type:'uint256'},
            {name:'verifyingContract',type:'address'}
        ],
        Person:[
            {name:'name', type:'string'},
            {name: 'wallet', type:'address'}
        ],
        Mail:[
            {name:'from', type:'Person'},
            {name:'to', type:'Person'},
            {name:'contents', type:'string'}
        ]
    },
    primaryType:'Mail',
    domain:{
        name:'Ether Email',
        version: '1',
        chainId: 1,
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
    },
    message: {
        from: {
            name: 'Cow',
            wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
        },
        to: {
            name: 'Bob',
            wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
        },
        contents: 'Hello, Bob!',
    },

}

const types = typedData.types;

function encodeType(typeName){
    if(types[typeName] === undefined){
        return ''
    }
    var result = typeName + '('
    var type = types[typeName]
    var refTypes = []
    for(var i=0;i<type.length;i++){
        var fieldDef = type[i]
        result += fieldDef.type + ' ' + fieldDef.name + ','
        if(types[fieldDef.type] != undefined){
            refTypes.push(fieldDef.type)
        }
    }
    result = result.slice(0,-1)
    result += ')'
    //sub types
    refTypes = refTypes.filter (function (value, index, array) { 
        return array.indexOf (value) == index;
    });
    for(var i=0;i<refTypes.length;i++){
        var subEncodedType = encodeType(refTypes[i])
        result += subEncodedType
    }

    return result
}


function typeHash(typeName){
    return ethUtil.keccak256(Buffer.from(encodeType(typeName), 'utf8'))
}

function encodeData(obj){
    
}

var encodedType = encodeType('Mail')
console.log(encodedType)
var result = typeHash('Mail')
console.log(ethUtil.bufferToHex(result))