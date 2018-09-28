
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'https://explorer.obsr.xyz',
    'port': '8087',
    'prefix': '/api',
    'timeout': '10s'
  },
  'coinMarketCap': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'obsr'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'obsrx',
    'user': 'obsr',
    'pass': 'obsr'
  },
  'freegeoip': {
    'api': 'https://extreme-ip-lookup.com/json/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '9568',
    'user': 'obsr',
    'pass': 'this',
    'timeout': 8000, // 8 seconds
  }
};

module.exports = config;
