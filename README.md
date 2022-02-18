# NFT Marketplace Project 

1. Users can list their NFTs for sale in this marketplace
2. Users can purchase the NFTs from marketplace


## Replicate & Run This Project

### Clone Repo & Install Dependencies
```shell
git clone https://github.com/ShivaShanmuganathan/NFT-Marketplace.git
cd NFT-marketplace
npm install
```

### Compile & Test Smart Contracts
```shell
npx hardhat compile
npx hardhat test
```

### Run Local Node & Deploy Smart Contracts
```shell
npx hardhat node 
npx hardhat run scripts/deploy.js --network localhost
```

### Fire The FrontEnd
```shell
npm run dev
```


### Transfer 100 ETH From Account in Local Network To your MetaMask Account
```shell

npx hardhat console --network localhost

const [owner,  feeCollector, operator] = await ethers.getSigners();

await owner.sendTransaction({
   to: "paste-your-address",
   value: ethers.utils.parseEther("100"), 
});

```
