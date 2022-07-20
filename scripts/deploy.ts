import { ethers } from 'hardhat';

async function main() {
  const Cyberfist = await ethers.getContractFactory('Cyberfist');
  const CF = await Cyberfist.deploy();

  await CF.deployed();

  console.log('Cyberfist Deployed to ', CF.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
