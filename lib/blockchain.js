
const params = {
  LAST_POW_BLOCK: 200,
  ZEROCOIN_BLOCK_V2_START:60
};

const avgBlockTime = 60; // 1 minutes (60 seconds)

const blocksPerDay = (24 * 60 * 60) / avgBlockTime; // 960

const blocksPerWeek = blocksPerDay * 7; // 6720

const blocksPerMonth = (blocksPerDay * 365.25) / 12; // 29220

const blocksPerYear = blocksPerDay * 365.25; // 350640

const mncoins = 350000.0;

const getMNBlocksPerDay = (mns) => {
  return blocksPerDay / mns;
};

const getMNBlocksPerWeek = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 52);
};

const getMNBlocksPerMonth = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 12);
};

const getMNBlocksPerYear = (mns) => {
  return getMNBlocksPerDay(mns) * 365.25;
};

const getMNSubsidy = (nHeight = 0, nMasternodeCount = 0, nMoneySupply = 0) => {
  const blockValue = getSubsidy(nHeight);
  let ret = 0.0;

  if (nHeight <= params.LAST_POW_BLOCK) {
    ret = 0;
  } else if (nHeight <= params.ZEROCOIN_BLOCK_V2_START) {
    ret = blockValue > 2410  ? 2410 : blockValue * 0.9;
  } else {
    //When zSLX is staked, masternode gets less SLX
    // if (isZSLXStake){
    //   ret = blockValue > 2410 ? 2410 : 0;
    // } else {
    //   ret = blockValue > 2440 ? 2440 : 0;
    // }
    //don't know if is zSLX, so average
    ret = blockValue > 2410 ? 2425 : 0;
  }
  return ret;
};

const getSubsidy = (nHeight = 1) => {
  let nSubsidy = 0.0;
  if (nHeight === 1) {
    nSubsidy = 947000000;
  } else if (nHeight >= 2 && nHeight <= 11) {
    nSubsidy = 0;                            // 15 blocks with 0 rewards
  } else if (nHeight >= 12 && nHeight <= 311) {       // Switch to PoS at block 200
    nSubsidy = 10000;                        // 3M SLX for masternodes and staking, to be reconciled after coin distribution
  } else if (nHeight >= 312 && nHeight <= 67000) {
    nSubsidy = 0;
  } else if (nHeight >= 67001 && nHeight <= 67003) {  // Increase overall coins by 10x with 3 blocks each containing 2850000000 SLX (Together 8550000000 SLX) (Aim for 9th of July 2018, 7 weeks after 15th of May = 80640 blocks)
    nSubsidy = 2850000000;
  } else if (nHeight >= 67004 && nHeight <= 107623) {  // 40620 + 67004 = 107624; (Aim for 1th of August 2018)
    nSubsidy = 0;
  } else if (nHeight >= 107624) {
    nSubsidy = 2710;
  } else {
    nSubsidy = 0;
  }
  return nSubsidy;
};

const getROI = (subsidy, mns) => {
  return ((getMNBlocksPerYear(mns) * subsidy) / mncoins) * 100.0;
};

const isAddress = (s) => {
  return typeof(s) === 'string' && s.length === 34;
};

const isBlock = (s) => {
  return !isNaN(s) || (typeof(s) === 'string');
};

const isPoS = (b) => {
  return !!b && b.height > params.LAST_POW_BLOCK; // > 182700
};

const isTX = (s) => {
  return typeof(s) === 'string' && s.length === 64;
};

module.exports = {
  avgBlockTime,
  blocksPerDay,
  blocksPerMonth,
  blocksPerWeek,
  blocksPerYear,
  mncoins,
  params,
  getMNBlocksPerDay,
  getMNBlocksPerMonth,
  getMNBlocksPerWeek,
  getMNBlocksPerYear,
  getMNSubsidy,
  getSubsidy,
  getROI,
  isAddress,
  isBlock,
  isPoS,
  isTX
};
