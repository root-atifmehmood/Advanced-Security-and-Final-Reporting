// server.js
const express = require('express');
const logger = require('./logger'); // Import our custom logger

logger.info('Application is starting up...');

// --- Server #1 on Port 3000 ---
const app1 = express();
const port1 = 3000;
app1.get('/', (req, res) => {
  logger.info(`A user visited Server 1. IP Address: ${req.ip}`);
  res.send(`Hello from Server 1 on port ${port1}. This visit has been logged.`);
});
app1.listen(port1, () => {
  logger.info(`Server 1 is running and listening on http://localhost:${port1}`);
});

// --- Server #2 on Port 8080 ---
const app2 = express();
const port2 = 8080;
app2.listen(port2, () => {
  logger.info(`Server 2 is running and listening on http://localhost:${port2}`);
});

// --- Server #3 on Port 9000 ---
const app3 = express();
const port3 = 9000;
app3.listen(port3, () => {
  logger.info(`Server 3 is running and listening on http://localhost:${port3}`);
});
