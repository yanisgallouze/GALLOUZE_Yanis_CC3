import express from "express";
import morgan from "morgan";
import createError from 'http-errors';

const host = "localhost";
const port = 8000;
const mode = process.env.NODE_ENV || 'development';

const app = express();

if (app.get("env") === "development") app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.static("static"));


app.get("/random/:nb", async function (request, response, next) {
    const length = Number.parseInt(request.params.nb, 10);
    if (Number.isNaN(length)) {
      return next(createError(400, "Invalid number parameter"));
    }
    const numbers = Array.from({ length })
      .map(() => Math.floor(100 * Math.random()));
    const welcome = "Random Numbers Page";
    return response.render("random", { numbers, welcome });
  });

const server = app.listen(port, host);

server.on("listening", () =>
  console.info(
    `HTTP listening on http://${server.address().address}:${server.address().port} with mode '${process.env.NODE_ENV}'`,
  ),
);

app.use((request, response, next) => {
    console.debug(`default route handler : ${request.url}`);
    return next(createError(404, "Page not found"));
  });
  
  // Gestionnaire d'erreurs
  app.use((error, _request, response, _next) => {
    console.debug(`default error handler: ${error}`);
    const status = error.status ?? 500;
    const stack = app.get("env") === "development" ? error.stack : "";
    const result = { code: status, message: error.message, stack };
  
    return response.status(status).render("error", result);
  });

  


console.info(`File ${import.meta.url} executed.`);