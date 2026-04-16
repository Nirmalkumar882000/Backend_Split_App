const path = require('path');
require('dotenv').config();

// Standard entry point that proxies to the server logic
console.log('\x1b[36m🚀 Initializing Splitwise Clone Core...\x1b[0m');

try {
    require('./src/server.js');
} catch (err) {
    console.error('\x1b[31m✘ CRITICAL FAILURE: Failed to load server module\x1b[0m');
    console.error(err);
    process.exit(1);
}
