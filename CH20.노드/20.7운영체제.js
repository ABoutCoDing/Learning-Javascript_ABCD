const os = require('os');

console.log("Hostname: " + os.hostname());                                      // Hostname: MacBook-Pro
console.log("OS type: " + os.type());                                           // OS type: Darwin       
console.log("OS platform: " + os.platform());                                   // OS platform: darwin
console.log("OS release: " + os.release());                                     // OS release: 17.7.0
console.log("OS uptime: " + (os.uptime()/60/60/24).toFixed(1) + " days");       // OS uptime: 3.2 days
console.log("CPU archtecture: " + os.arch());                                   // CPU archtecture: x64
console.log("Number of CPUS: " + os.cpus().length);                             // Number of CPUS: 4
console.log("Total memory: " + (os.totalmem()/1e6).toFixed(1) + " MB");         // Total memory: 17179.9 MB
console.log("Free memory: " + (os.freemem()/1e6).toFixed(1) + " MB");           // Free memory: 67.4 MB