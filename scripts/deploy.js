// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  const Market = await ethers.getContractFactory("NFTMarket")
  const market = await Market.deploy()
  await market.deployed()
  const marketAddress = market.address
  console.log("NFT Market Address: ", marketAddress);

  const NFT = await ethers.getContractFactory("NFT")
  const nft = await NFT.deploy(marketAddress)
  await nft.deployed()
  const nftContractAddress = nft.address    

  
  console.log("NFT Address: ", nftContractAddress); 


  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
