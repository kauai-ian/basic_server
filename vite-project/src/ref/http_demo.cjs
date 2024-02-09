


// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const http = require('node:http')


// create server object
http.createServer(( request, response) => {
  // write response
  response.write("Hellloooooo world");
  response.end();
}).listen(5000, () => console.log('server running...'))
