var grabbed = require("./bands");

if (process.argv.length > 2) {
    console.log(grabbed.bands[process.argv[2]] + " is a " + process.argv[2] + " band.");
}
else {
    for (var i in grabbed.bands) {
        console.log(grabbed.bands[i] + " is a " + i + " band.");
    }
}

console.log(process.argv.length);