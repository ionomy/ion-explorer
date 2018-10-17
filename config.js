
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'https://ionchain.com',
    'port': '8087',
    'prefix': '/api',
    'timeout': '10s'
  },
  'coinMarketCap': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'ion'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'ionx',
    'user': 'ion',
    'pass': 'ion'
  },
  'freegeoip': {
    'api': 'https://extreme-ip-lookup.com/json/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '12705',
    'user': 'ion',
    'pass': 'this',
    'timeout': 8000, // 8 seconds
  }
};

module.exports = config;
