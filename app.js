const http = require("http");
const routes = require("./routes.js");

const server = http.createServer((req, res) => {
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      routes.indexPage(path, res);
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      routes.aboutPage(path, res);
      break;
    case "/contact":
      path += "about .html";
      res.statusCode = 200;
      routes.contactPage(path, res);
      break;
    case "/subscribe":
      path += "subscribe.html";
      res.setHeader("Set-cookie", "subscription=New");
      routes.subscribePage(path, res);
      break;
    case "/about-me":
      // this is a redirect for a deprecated route
      response.statusCode = 301;
      response.setHeader("Location", "/about");
      response.end();
      break;
    default:
      path += "404.html";
      response.statusCode = 404;
      buffy.fourOfourPage(request.url, path, response);
      break;
  }
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
