const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1598931900,
  hardCapTimer: 172800,
  softCap: ether("1000"),
};

config.redeemer = {
  redeemBP: 200,
  redeemInterval: 3600,
  bonusRangeStart: [
    ether("0"),
    ether("250"),
    ether("500"),
    ether("1000")
  ],
  bonusRangeBP: [1000, 500, 250, 0],
};

config.presale = {
  maxBuyPerAddress: ether("20"),
  uniswapEthBP: 6000,
  lidEthBP: 500,
  referralBP: 250,
  hardcap: ether("4000"),
  token: "0x016d2fea40700d99df09c9e99251894262b01388",
  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  lidFund: "0xb63c4F8eCBd1ab926Ed9Cb90c936dffC0eb02cE2",
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2"
};

module.exports = config;
