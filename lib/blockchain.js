
const params = {
  LAST_POW_BLOCK: 101,
  ZEROCOIN_BLOCK_V2_START:50
};

const avgBlockTime = 60; // 1 minutes (60 seconds)

const blocksPerDay = (24 * 60 * 60) / avgBlockTime; // 960

const blocksPerWeek = blocksPerDay * 7; // 6720

const blocksPerMonth = (blocksPerDay * 365.25) / 12; // 29220

const blocksPerYear = blocksPerDay * 365.25; // 350640

const mncoins = 1000000.0;

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

  let mNodeCoins = nMasternodeCount * 1000000;
  if (mNodeCoins === 0) {
    ret = 0;
  } else if (nHeight <= 10001) {
    if (mNodeCoins <= (nMoneySupply * .05) && mNodeCoins > 0) {
      ret = blockValue * .85;
    } else if (mNodeCoins <= (nMoneySupply * .1) && mNodeCoins > (nMoneySupply * .05)) {
      ret = blockValue * .8;
    } else if (mNodeCoins <= (nMoneySupply * .15) && mNodeCoins > (nMoneySupply * .1)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .2) && mNodeCoins > (nMoneySupply * .15)) {
      ret = blockValue * .7;
    } else if (mNodeCoins <= (nMoneySupply * .25) && mNodeCoins > (nMoneySupply * .2)) {
      ret = blockValue * .65;
    } else if (mNodeCoins <= (nMoneySupply * .3) && mNodeCoins > (nMoneySupply * .25)) {
      ret = blockValue * .6;
    } else if (mNodeCoins <= (nMoneySupply * .35) && mNodeCoins > (nMoneySupply * .3)) {
      ret = blockValue * .55;
    } else if (mNodeCoins <= (nMoneySupply * .4) && mNodeCoins > (nMoneySupply * .35)) {
      ret = blockValue * .5;
    } else if (mNodeCoins <= (nMoneySupply * .45) && mNodeCoins > (nMoneySupply * .4)) {
      ret = blockValue * .45;
    } else if (mNodeCoins <= (nMoneySupply * .5) && mNodeCoins > (nMoneySupply * .45)) {
      ret = blockValue * .4;
    } else if (mNodeCoins <= (nMoneySupply * .55) && mNodeCoins > (nMoneySupply * .5)) {
      ret = blockValue * .35;
    } else if (mNodeCoins <= (nMoneySupply * .6) && mNodeCoins > (nMoneySupply * .55)) {
      ret = blockValue * .3;
    } else if (mNodeCoins <= (nMoneySupply * .65) && mNodeCoins > (nMoneySupply * .6)) {
      ret = blockValue * .25;
    } else if (mNodeCoins <= (nMoneySupply * .7) && mNodeCoins > (nMoneySupply * .65)) {
      ret = blockValue * .2;
    } else if (mNodeCoins <= (nMoneySupply * .75) && mNodeCoins > (nMoneySupply * .7)) {
      ret = blockValue * .15;
    } else {
      ret = blockValue * .1;
    }
  } else if (nHeight > 10001) {
    if (mNodeCoins <= (nMoneySupply * .01) && mNodeCoins > 0) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .02) && mNodeCoins > (nMoneySupply * .01)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .03) && mNodeCoins > (nMoneySupply * .02)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .04) && mNodeCoins > (nMoneySupply * .03)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .05) && mNodeCoins > (nMoneySupply * .04)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .06) && mNodeCoins > (nMoneySupply * .05)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .07) && mNodeCoins > (nMoneySupply * .06)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .08) && mNodeCoins > (nMoneySupply * .07)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .09) && mNodeCoins > (nMoneySupply * .08)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .10) && mNodeCoins > (nMoneySupply * .09)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .11) && mNodeCoins > (nMoneySupply * .10)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .12) && mNodeCoins > (nMoneySupply * .11)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .13) && mNodeCoins > (nMoneySupply * .12)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .14) && mNodeCoins > (nMoneySupply * .13)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .15) && mNodeCoins > (nMoneySupply * .14)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .16) && mNodeCoins > (nMoneySupply * .15)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .17) && mNodeCoins > (nMoneySupply * .16)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .18) && mNodeCoins > (nMoneySupply * .17)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .19) && mNodeCoins > (nMoneySupply * .18)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .20) && mNodeCoins > (nMoneySupply * .19)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .21) && mNodeCoins > (nMoneySupply * .20)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .22) && mNodeCoins > (nMoneySupply * .21)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .23) && mNodeCoins > (nMoneySupply * .22)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .24) && mNodeCoins > (nMoneySupply * .23)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .25) && mNodeCoins > (nMoneySupply * .24)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .26) && mNodeCoins > (nMoneySupply * .25)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .27) && mNodeCoins > (nMoneySupply * .26)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .28) && mNodeCoins > (nMoneySupply * .27)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .29) && mNodeCoins > (nMoneySupply * .28)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .30) && mNodeCoins > (nMoneySupply * .29)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .31) && mNodeCoins > (nMoneySupply * .30)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .32) && mNodeCoins > (nMoneySupply * .31)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .33) && mNodeCoins > (nMoneySupply * .32)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .34) && mNodeCoins > (nMoneySupply * .33)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .35) && mNodeCoins > (nMoneySupply * .34)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .363) && mNodeCoins > (nMoneySupply * .35)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .376) && mNodeCoins > (nMoneySupply * .363)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .389) && mNodeCoins > (nMoneySupply * .376)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .402) && mNodeCoins > (nMoneySupply * .389)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .415) && mNodeCoins > (nMoneySupply * .402)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .428) && mNodeCoins > (nMoneySupply * .415)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .441) && mNodeCoins > (nMoneySupply * .428)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .454) && mNodeCoins > (nMoneySupply * .441)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .467) && mNodeCoins > (nMoneySupply * .454)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .48) && mNodeCoins > (nMoneySupply * .467)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .493) && mNodeCoins > (nMoneySupply * .48)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .506) && mNodeCoins > (nMoneySupply * .493)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .519) && mNodeCoins > (nMoneySupply * .506)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .532) && mNodeCoins > (nMoneySupply * .519)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .545) && mNodeCoins > (nMoneySupply * .532)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .558) && mNodeCoins > (nMoneySupply * .545)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .571) && mNodeCoins > (nMoneySupply * .558)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .584) && mNodeCoins > (nMoneySupply * .571)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .597) && mNodeCoins > (nMoneySupply * .584)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .61) && mNodeCoins > (nMoneySupply * .597)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .623) && mNodeCoins > (nMoneySupply * .61)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .636) && mNodeCoins > (nMoneySupply * .623)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .649) && mNodeCoins > (nMoneySupply * .636)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .662) && mNodeCoins > (nMoneySupply * .649)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .675) && mNodeCoins > (nMoneySupply * .662)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .688) && mNodeCoins > (nMoneySupply * .675)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .701) && mNodeCoins > (nMoneySupply * .688)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .714) && mNodeCoins > (nMoneySupply * .701)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .727) && mNodeCoins > (nMoneySupply * .714)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .74) && mNodeCoins > (nMoneySupply * .727)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .753) && mNodeCoins > (nMoneySupply * .74)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .766) && mNodeCoins > (nMoneySupply * .753)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .779) && mNodeCoins > (nMoneySupply * .766)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .792) && mNodeCoins > (nMoneySupply * .779)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .805) && mNodeCoins > (nMoneySupply * .792)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .818) && mNodeCoins > (nMoneySupply * .805)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .831) && mNodeCoins > (nMoneySupply * .818)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .844) && mNodeCoins > (nMoneySupply * .831)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .857) && mNodeCoins > (nMoneySupply * .844)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .87) && mNodeCoins > (nMoneySupply * .857)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .883) && mNodeCoins > (nMoneySupply * .87)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .896) && mNodeCoins > (nMoneySupply * .883)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .909) && mNodeCoins > (nMoneySupply * .896)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .922) && mNodeCoins > (nMoneySupply * .909)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .935) && mNodeCoins > (nMoneySupply * .922)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .945) && mNodeCoins > (nMoneySupply * .935)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .961) && mNodeCoins > (nMoneySupply * .945)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .974) && mNodeCoins > (nMoneySupply * .961)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .987) && mNodeCoins > (nMoneySupply * .974)) {
      ret = blockValue * .75;
    } else if (mNodeCoins <= (nMoneySupply * .99) && mNodeCoins > (nMoneySupply * .987)) {
      ret = blockValue * .75;
    } else {
      ret = blockValue * .75;
    }
  }
  return ret;
};

const getSubsidy = (nHeight = 1) => {
  let nSubsidy = 0.0;
  if (nHeight === 0) {
    /* POW1 - PHASE 1 - Initial Premine */
    nSubsidy = 8437500000;
  } else if (nHeight === 1) {
    nSubsidy = 28125000;
    /* POW2 - PHASE 2 - Closed Mining */
  } else if (nHeight <= 101 && nHeight > 1) {
    nSubsidy = 28125000;
    /* POS1 - PHASE 3 - Closed POS mining */
  } else if (nHeight <= 1001 && nHeight > 101) {
    nSubsidy = 0;
    /* POS2 - PHASE 4 - Closed POS mining */
  } else if (nHeight <= 10000 && nHeight > 1001) {
    nSubsidy = 0;
    /* POS3 - PHASE 5 - Public POS */
  } else if (nHeight >= 10001) {
    nSubsidy = 215;
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
