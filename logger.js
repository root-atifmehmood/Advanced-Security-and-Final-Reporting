// logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info', // Log messages of level 'info' and above ('warn', 'error').
  format: winston.format.combine(
    winston.format.timestamp(), // Add a timestamp to each log.
    winston.format.json()       // Log in the structured JSON format.
  ),
  transports: [
    // This transport writes all logs to a file named 'security.log'.
    new winston.transports.File({ filename: 'security.log' }),
    
    // This transport shows logs in the terminal for easy development viewing.
    new winston.transports.Console({ format: winston.format.simple() })
  ]
});

module.exports = logger;
