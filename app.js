// app.js
const os = require('os');

function getSystemStatus() {
    return {
        status: "Online",
        platform: os.platform(),
        uptime: os.uptime(),
        timestamp: new Date().toISOString(),
        // A 'secret' simulated check (useful for DevOps/Security talk)
        environment: process.env.NODE_ENV || "development"
    };
}

console.log("--- DevOps System Status Report ---");
console.log(JSON.stringify(getSystemStatus(), null, 2));

// Export for testing
module.exports = { getSystemStatus };
