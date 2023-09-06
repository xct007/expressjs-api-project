/**
 * @fileoverview
 * This file contains the Express application.
 * It exports an Express application instance.
 * It uses the middlewares from src/middlewares.js.
 * It uses the router from src/routers/router.js.
 * It uses the api from src/api/api.js.
 * @see {@link module:src/middlewares}
 * @see {@link module:src/routers/router}
 * @see {@link module:src/api/api}
 * @module src/app
 * @requires express
 * @requires src/middlewares
 * @requires src/routers/router
 * @requires src/api/api
 * @exports app
 */

/**
 * @description
 * This module is used to create the Express application.
 */
import Express from "express";

/**
 * @description
 * This module loads environment variables from a .env file.
 */
import "dotenv/config.js";

/**
 * @description
 * Import the middlewares from src/middlewares.js.
 */
import {
	logger,
	jsonParser,
	urlEncodedParser,
	cookieParser,
	notFound,
	errorHandler,
	cors,
	custom,
} from "./middlewares.js";

/**
 * @description
 * Import the router from src/routers/router.js.
 */
import api from "./api/api.js";

/**
 * @description
 * Import the router from src/routers/router.js.
 */
import router from "./routers/router.js";

/**
 * @description
 * This is the Express application.
 * @type {Express.Application}
 * @see {@link https://expressjs.com/en/4x/api.html#app}
 * @see {@link https://expressjs.com/en/4x/api.html#express}
 * @see {@link https://expressjs.com/en/4x/api.html#express.json}
 * @see {@link https://expressjs.com/en/4x/api.html#express.urlencoded}
 * @see {@link https://expressjs.com/en/4x/api.html#express.static}
 * @see {@link https://expressjs.com/en/4x/api.html#express.Router}
 * @see {@link https://expressjs.com/en/4x/api.html#express.Router.use}
 * @see {@link https://expressjs.com/en/4x/api.html#express.Router.get}
 * @see {@link https://expressjs.com/en/4x/api.html#express.Router.post}
 * @see {@link https://expressjs.com/en/4x/api.html#express.Router.put}
 * @see {@link https://expressjs.com/en/4x/api.html#express.Router.delete}
 * @see {@link https://expressjs.com/en/4x/api.html#express.Router.route}
 * @see {@link https://expressjs.com/en/4x/api.html#express.Router.param}
 * @see {@link https://expressjs.com/en/4x/api.html#express.Router.all}
 * @see {@link https://expressjs.com/en/4x/api.html#express.Router.render}
 * @see {@link https://expressjs.com/en/4x/api.html#express.Router.listen}
 * @see {@link https://expressjs.com/en/4x/api.html#express.Router.route}
 * @see {@link https://expressjs.com/en/4x/api.html#express.Router.use}
 */
const app = Express();

/**
 * @description
 * This middleware logs the request method and url to the console.
 * It is mounted at the beginning of the middleware stack.
 */
app.use(logger);

/**
 * @description
 * This middleware sets the CORS headers.
 * It is mounted at the beginning of the middleware stack.
 */
app.use(cors);

/**
 * @description
 * This middleware from built-in middleware module removes the X-Powered-By header.
 * It is mounted at the beginning of the middleware stack.
 */
app.use(custom.remove_x_powered_by);

/**
 * @description
 * This middleware parses the body of the request and
 * converts it to an object.
 * It is mounted at the beginning of the middleware stack.
 */
app.use(jsonParser);

/**
 * @description
 * This middleware parses the body of the request and
 * converts it to an object.
 * It is mounted at the beginning of the middleware stack.
 */
app.use(urlEncodedParser);

/**
 * @description
 * This middleware parses the cookies of the request and
 * converts it to an object.
 * It is mounted at the beginning of the middleware stack.
 */
app.use(cookieParser);

/**
 * @description
 * This api is mounted at /api.
 * It is mounted at the beginning of the middleware stack.
 * It is mounted before the router.
 * It is mounted before the 404 middleware.
 * It is mounted before the error middleware.
 */
app.use("/api", api);

/**
 * @description
 * This router is mounted at /.
 * It is mounted at the beginning of the middleware stack.
 * It is mounted before the 404 middleware.
 * It is mounted before the error middleware.
 */
app.use("/", router);

/**
 * @description
 * This middleware handles 404 errors.
 * It is mounted at the end of the middleware stack.
 * It is mounted before the error middleware.
 * It is mounted before the default error handler.
 */
app.use(notFound);

/**
 * @description
 * This middleware handles errors.
 * It is mounted at the end of the middleware stack.
 * It is passed 4 arguments.
 * The first argument is the error.
 * The second argument is the request.
 * The third argument is the response.
 * The fourth argument is the next function.
 * The next function is used to call the next middleware.
 * If the next function is called with an argument,
 * the argument is passed to the next middleware.
 * If the next function is called without an argument,
 * the next middleware is called with the error.
 * If the next function is not called,
 * the next middleware is called with the error.
 * If the next function is not called and there is no next middleware,
 * the error is sent to the client.
 * If the next function is not called and there is no next middleware and
 * the error is a server error,
 * the error is sent to the client.
 */
app.use(errorHandler);

/**
 * @description
 * export the Express application.
 * @type {Express.Application}
 */
export default app;
