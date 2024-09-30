import express from "express";
import morgan from "morgan";
import createError from 'http-errors';
import logger from "loglevel";

const host = "localhost";
const port = 8000;

logger.setLevel(logger.levels.DEBUG);
logger.info("Démarrage de l'application...");


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
    logger.info(
        `HTTP listening on http://${server.address().address}:${server.address().port} with mode '${process.env.NODE_ENV}'`,
    ),
);

app.use((request, response, next) => {
    logger.debug(`default route handler : ${request.url}`);
    return next(createError(404, "Page not found"));
});


app.use((error, _request, response, _next) => {
    logger.error(`default error handler: ${error}`);
    const status = error.status ?? 500;
    const stack = app.get("env") === "development" ? error.stack : "";
    const result = { code: status, message: error.message, stack };

    return response.status(status).render("error", result);
});

logger.info(`File ${import.meta.url} executed.`);
