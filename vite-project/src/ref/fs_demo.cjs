

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const fs = require('fs')
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path')

// create folder
// eslint-disable-next-line no-undef
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Folder created...')
})

// create and write to file
// eslint-disable-next-line no-undef
fs.writeFile(path.join(__dirname , '/test', 'hello.txt'), "hello world", err => {
    if (err) throw err;
    console.log('File written to...')
})