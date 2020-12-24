const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.port,
    retry_strategy: () => 1000
});

const sub = redisClient.duplicate();

/**
 *  
 * calculate fibonaci series
 * @param {Integer as index of fibonaci series} index 
 */
function fib(index) {
    if (index < 2) return 1;
    return fib(index - 1) + fin(index - 2);
}

/**
 * here messagew is the index in fibonaci series
 */
sub.on('message', (channel, message) => {
    redisClient.hset('values', message, fib(parseInt(message)));
});

/**
 * Subscribe to insert event
 */
sub.subscribe('insert');