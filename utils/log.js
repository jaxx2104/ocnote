import log4js from 'log4js'

log4js.configure({
  'appenders': [
    {
      'type': 'dateFile',
      'category': 'system',
      'filename': 'logs/system.log',
      'pattern': '-yyyy-MM-dd'
    },
    {
      'type': 'dateFile',
      'category': 'access',
      'filename': 'logs/access.log',
      'pattern': '-yyyy-MM-dd'
    },
    {
      'type': 'dateFile',
      'category': 'error',
      'filename': 'logs/error.log',
      'pattern': '-yyyy-MM-dd'
    }
  ],
  categories: {
    default: {
      appenders: ['system'],
      level: 'info'
    }
  }
})

const log = log4js.getLogger('system')
export default log
