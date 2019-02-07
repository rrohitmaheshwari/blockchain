const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(1234, '1IANSDIBHAS0','ASDASD3W2AS2R');
bitcoin.createNewBlock(54, '1IANSDIBH#S0','ASDASD3W2AS2R');
bitcoin.createNewBlock(3, '1IANSDIBasS0','QWSDASD3W2AS2R');

console.log(bitcoin);