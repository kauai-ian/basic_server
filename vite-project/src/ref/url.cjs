// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires, no-undef
const url = require('url')

const myUrl = new URL('http://google.com')

console.log(myUrl.href)
console.log(myUrl.toString())
//host (root)
console.log(myUrl.href)
//host doesnt get a port
console.log(myUrl.host)
//pathname
console.log(myUrl.pathname)
//serialized query
console.log(myUrl.search)
// params object
console.log(myUrl.searchParams)
//add param
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams)
// loop through params (gives each key value pair)
myUrl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`))

