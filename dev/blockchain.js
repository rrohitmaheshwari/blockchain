function Blockchain() {
	this.chain = []; 		  			//chain data
	this.newTransaction = []; 			//current transaction data
}

// I prefer constructor function over classes as in Javascript Classes are just sugar coating over constructor function

Blockchain.prototype.createNewBlock = function (nounce, previousBlockHash, hash){
	
	const  newBlock = {
		index: this.chain.length + 1,	  		//block number
		timestamp: Date.now(),			  		//current time date stamp
		transaction: this.newTransaction, 		//current pending transactions
		nounce: nounce,					  		//number comes from proof of work
		hash: hash,						  		//hash of the transactions
		previousBlockHash: previousBlockHash	//data from the previous block hash
	};

	this.newTransaction = [];				//clear current transaction data
	this.chain.push(newBlock);				//push new block to chain

	return newBlock;
}

module.exports = Blockchain;