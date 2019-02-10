# Blockchain
Javascript based blockchain

### Prerequisite for blockchain project

1. NodeJS should be installed in the system
2. Should run following command to install the project dependencies

```
npm i
```

### Command to start nodes

```
npm run node_1
```
 or
```
nodemon --watch dev -js dev/networkNode.js 3001 http://localhost:3001
```
check package.json for complete details

## APIs

### Blockchain 

Fetches complete Blockchain.

**URL** : `http://localhost:3001/blockchain`

**Method** : `GET`

**Data**

```json
{
    "chain": [
        {
            "index": 1,
            "timestamp": <number>,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        ...
    ],
    "pendingTransactions": [
    {
     "amount": <number>,
            "sender": <string>,
            "recipient": <string>,
            "transactionId": <string>
    },
    ...
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": 
    [
    <string>,
    ...
    ]
}
```


### Transaction 

To create and broadcast new Transactions.

**URL** : `http://localhost:3001/transaction/broadcast`

**Method** : `POST`

**Data constraints**

```json
{
	"amount": <number>,
	"sender": <string>,
	"recipient": <string>
}
```


### Mine 

To mine a new block.

**URL** : `http://localhost:3001/mine`

**Method** : `GET`

**Data**

```json
{
    "note": "New block mined & broadcast successfully",
    "block": {
       <block>
    }
}
```



### Register Node 

To register and broadcast new node URL.

**URL** : `http://localhost:3001/register-and-broadcast-node`

**Method** : `POST`

**Data constraints**

```json
{
	"newNodeUrl":<string>
}
```


### Consensus

To register and broadcast new node URL.

**URL** : `http://localhost:3001/consensus`

**Method** : `GET`

**Data**

```json
{
    "note": "This chain has been replaced.",
    "chain": [
        <blockchain>
    ]
}
```


