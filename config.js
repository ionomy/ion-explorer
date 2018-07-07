
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'http://explorer2.wagerr.com',
    'port': '80',
    'prefix': '/api',
    'timeout': '5s'
  },
  'coinMarketCap': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'wagerr'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'wagerrx',
    'user': 'wagerr',
    'pass': 'wagerr'
  },
  'freegeoip': {
    'api': 'http://geoip.nekudo.com/api/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '55005',
    'user': 'wagerr',
    'pass': 'this',
    'timeout': 8000, // 8 seconds
  }
};

module.exports = config;
