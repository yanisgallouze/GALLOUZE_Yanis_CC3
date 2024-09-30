import http from "node:http";
import fs from "node:fs/promises";

const host = "localhost";
const port = 8000;

console.log("NODE_ENV =", process.env.NODE_ENV);

async function requestListener(request, response) {
  response.setHeader("Content-Type", "text/html");
  try {
    const conts = await fs.readFile("index.html", "utf8");
    switch (request.url.split("/")[1]){
      case "":
      case "index.html":
        response.writeHead(200);
        return response.end(conts);
      case "random.html":
        response.writeHead(200);
        return response.end(`<html><p>${Math.floor(100 * Math.random())}</p></html>`);
      case "random":
        const num = parseInt(request.url.split('/')[2])
        let text = ""
        for (let iteration = 0; iteration<num; ite++){
          text+=`<p>${Math.floor(100 * Math.random())}</p>`
        }
        return response.end(`<html>${texte}</html>`)
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


const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
