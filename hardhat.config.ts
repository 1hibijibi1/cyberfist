
import { task, HardhatUserConfig } from 'hardhat/config';
import '@typechain/hardhat';
import '@nomicfoundation/hardhat-toolbox';
import dotenv from 'dotenv';
import "@nomiclabs/hardhat-etherscan";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.15',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: {
       rinkeby: process.env.ETHERSCANKEY ?? '',
       mainnet: process.env.ETHERSCANKEY ?? ''
    }
  },
  networks: {
    rinkeby: {
      chainId: 4,
      accounts: [process.env.RINKEBY_PRIVATEKEY ?? ''],
      url: process.env.RINKEBY_URL ?? ''
    },
    mainnet: {
      chainId: 1,
      gasPrice: 100000000000, // 100 gwei
      gasMultiplier: 1.5,
      accounts: [process.env.MAINNET_PRIVATEKEY ?? ''],
      url: process.env.MAINNET_URL ?? ''
    },
  }
};

export default config;

module.exports = {
  solidity: "0.8.15",
};
