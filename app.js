// app.js
const os = require('os');

const colors = {
    green: "\x1b[32m",
    red: "\x1b[31m",
    cyan: "\x1b[36m",
    yellow: "\x1b[33m",
    reset: "\x1b[0m"
};

function logSecurityEvent() {
    const events = [
        "Scanning open ports...",
        "Checking SSH configurations...",
        "Verifying Docker socket permissions...",
        "Analyzing kernel modules...",
        "Auditing user privileges..."
    ];
    const event = events[Math.floor(Math.random() * events.length)];
    console.log(`${colors.cyan}[${new Date().toLocaleTimeString()}]${colors.reset} ${event} ${colors.green}SAFE${colors.reset}`);
}

console.log(`${colors.yellow}
██████╗ ███████╗██╗   ██╗ ██████╗ ██████╗ ███████╗
██╔══██╗██╔════╝██║   ██║██╔═══██╗██╔══██╗██╔════╝
██║  ██║█████╗  ██║   ██║██║   ██║██████╔╝███████╗
██║  ██║██╔══╝  ╚██╗ ██╔╝██║   ██║██╔═══╝ ╚════██║
██████╔╝███████╗ ╚████╔╝ ╚██████╔╝██║     ███████║
╚═════╝ ╚══════╝  ╚═══╝   ╚═════╝ ╚═╝     ╚══════╝
${colors.reset}`);

console.log(`${colors.green}>>> SECURE NODE INITIALIZED ON ${os.platform().toUpperCase()}${colors.reset}\n`);

// Run a simulated scan every 2 seconds
const scanInterval = setInterval(logSecurityEvent, 2000);

// Stop after 10 seconds so the container doesn't run forever in the workshop
setTimeout(() => {
    clearInterval(scanInterval);
    console.log(`\n${colors.yellow}Final Report:${colors.reset} 0 Vulnerabilities Found. System Hardened.`);
}, 12000);
