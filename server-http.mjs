import http from "node:http";
import fs from "node:fs/promises";

const host = "localhost";
const port = 8000;

console.log("NODE_ENV =", process.env.NODE_ENV);

async function requestListener(request, response) {
  response.setHeader("Content-Type", "text/html");
  try {
    const contents = await fs.readFile("index.html", "utf8");
    const urlParts = request.url.split("/");
    switch (urlParts[1]) {
      case "index.html":
      case "":
        response.writeHead(200);
        return response.end(contents);
      case "random":
        if (urlParts[2]) {
          const nb = parseInt(urlParts[2], 10);
          const numbers = Array.from({ length: nb }).map(
            () => `<li>${Math.floor(100 * Math.random())}</li>`
          );
          response.writeHead(200);
          return response.end(`<html><ul>${numbers.join("")}</ul></html>`);
        }
        break;
      default:
        response.writeHead(404);
        return response.end(`<html><p>404: NOT FOUND</p></html>`);
    }
  } catch (error) {
    console.error(error);
    response.writeHead(500);
    return response.end(`<html><p>500: INTERNAL SERVER ERROR</p></html>`);
  }
}

async function requestListener(request, response) {
  response.setHeader("Content-Type", "text/html");
  try {
    const contents = await fs.readFile("index.html", "utf8");
    
    // Gestion des routes
    switch (request.url) {
      case "/index.html":
      case "/": // Traite /index.html et / de la même manière
        response.writeHead(200);
        return response.end(contents);
      
      case "/random.html":
        const randomNumber = Math.floor(100 * Math.random());
        response.writeHead(200);
        return response.end(`<html><p>${randomNumber}</p></html>`);
      
      default:
        response.writeHead(404);
        return response.end("<html><p>404: NOT FOUND</p></html>");
    }
  } catch (error) {
    console.error(error);
    response.writeHead(500);
    return response.end("<html><p>500: INTERNAL SERVER ERROR</p></html>");
  }
}


const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
