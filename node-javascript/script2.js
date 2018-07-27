const fs = require('fs-extra');
const largeNumber = 365;

module.exports = {
    largeNumber: largeNumber
};



(async function readF() {
    const data = await fs.readFile('./test.txt')
    console.log(data.toString());
})();

// readF('./test.txt');