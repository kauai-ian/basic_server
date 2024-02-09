// import person from './person.js'

// console.log(person.name)

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
// import Logger from './ref/event_demo.cjs'

// const logger = new Logger()

// logger.on('message', (data) => console.log('Called listener', data))

// logger.log('Hello world')

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
import http from "node:http";
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
import fs from "node:fs";
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
import path from "node:path";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// this is ok, but not very efficient for dynamic pages because we would have to do conditionals. What about images, or CSS?

// // create server object
// const server = http.createServer((req, res) => {
//   // write response
//   if (req.url === "/") {
//     // if url is / then we will set the status and content type
//     // eslint-disable-next-line no-undef
//     fs.readFile(
//       // eslint-disable-next-line no-undef
//       path.join(__dirname, "public", "index.html"),
//       (err, content) => {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" }); // write to the headers the content type.
//         res.end(content); // we want to output the content of the file
//       }
//     );
//   }
//   if (req.url === "/api/users") {
//     const users = [
//       { name: "Bob Smith", age: 40 },
//       { name: "John Doe", age: 30 },
//     ];
//     res.writeHead(200, { 'Content-Type': 'application/json'})
//     res.end(JSON.stringify(users))
//   }
// });

// eslint-disable-next-line no-undef
// const PORT = process.env.PORT || 5000;

// server.listen(5000, () => console.log(`server running on ${PORT}...`));

// BETTER WAY
const server = http.createServer((req, res) => {
  // build file path that is dynamic, set to the request URL (about, contact, home, etc.)
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // set the content type (html, css, png, json, etc)

  let extname = path.extname(filePath);

  // initial content type
  let contentType = "text/html";

  // check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        // some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

server.listen(5000, () => console.log(`server running on ${PORT}...`));
