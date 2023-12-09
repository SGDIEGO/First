const http = require("http");
const Fs = require("fs");

// Function to read file
function readFile(path) {
  return Fs.readFileSync(path, (err, data) => {
    if (err) {
      console.error(err);
      return null;
    }
    return data;
  });
}

// Constant
const PORT = 8080;
const PATH = "./public";

// Server
const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log("Info: ",url,", ",method);
  const header = {
    'Content-Type': 'text/html'
  };

  // Switch
  switch (url) {
    case "/":
      res.writeHead(200, header);
      res.end(readFile(PATH + "/index.html"));
      break;
    case "/about":
      res.writeHead(200, header);
      res.end(readFile(PATH + "/about.html"));
      break;
    case "/contact-me":
      res.writeHead(200, header);
      res.end(readFile(PATH + "/contact-me.html"));
      break;
    default:
      res.writeHead(404, header);
      res.end(readFile(PATH + "/404.html"));
      break;
  }
});

// Listener
server.listen(PORT, (error) => {
    if (error) {
        console.error(error);
        process.exit(1)
    }
  console.log(`Listenning on http://localhost:${PORT}`);
});
