// backend/utils/rateLimiter.js
const Bottleneck = require('bottleneck');

// Configure rate limiter
const limiter = new Bottleneck({
  minTime: 1000, // 1 request per second
  maxConcurrent: 1, // Only one request at a time
});

module.exports = limiter;