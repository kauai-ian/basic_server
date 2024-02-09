// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require("path");

//base file name
// eslint-disable-next-line no-undef
console.log(path.basename(__filename));

// directory name
// eslint-disable-next-line no-undef
console.log(path.dirname(__filename));

// file extension
// eslint-disable-next-line no-undef
console.log(path.extname(__filename));


//Create path object
// eslint-disable-next-line no-undef
console.log(path.parse(__filename).base);

// concatenate paths
// eslint-disable-next-line no-undef
console.log(path.join(__dirname, 'test', 'hello.html'))