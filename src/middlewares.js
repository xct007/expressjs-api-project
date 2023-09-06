/**
 * @fileoverview
 * This file contains all the middlewares used by the server.
 * Middlewares are functions that are executed before the
 * request handler. They can be used to parse the request body,
 * log the request, etc.
 */

import cookie from "cookie";
import qs from "qs";

/**
 * @params {Express.Request} req
 * @params {Express.Response} res
 * @params {Express.NextFunction} next
 * @returns {void}
 * @description
 * This middleware sends a 404 status code to the client.
 * It is called when no other middleware matches the request.
 * This middleware should be the last middleware in the chain.
 * If it is not the last middleware, it will be called even
 * when the request is matched by another middleware.
 * @example
 * ... // Other middlewares
 * app.use(notFound);
 * ... // Other middlewares
 */
export function notFound(req, res, next) {
	res.status(404).json({
		status: false,
		message: "Not found",
	});
}

/**
 * @params {Error} err
 * @params {Express.Request} req
 * @params {Express.Response} res
 * @params {Express.NextFunction} next
 * @returns {void}
 * @description
 * This middleware logs the error stack to the console and
 * sends a 500 status code to the client.
 * @example
 * ... // Other middlewares
 * app.use(errorHandler);
 * ... // Other middlewares
 */
export function errorHandler(err, req, res, next) {
	console.error(err.stack);
	res.status(500).json({
		status: false,
		message: "Internal server error",
	});
}

/**
 * @params {Express.Request} req
 * @params {Express.Response} res
 * @params {Express.NextFunction} next
 * @returns {void}
 * @description
 * This middleware logs the request method and url to the console.
 * @example
 * app.use(logger);
 * ... // Other middlewares
 */
export function logger(req, res, next) {
	console.log(`${req.method} ${req.url}`);
	next();
}

/**
 * @params {Express.Request} req
 * @params {Express.Response} res
 * @params {Express.NextFunction} next
 * @returns {void}
 * @description
 * This middleware parses the body of the request and
 * converts it to an object.
 * @example
 * app.use(jsonParser);
 * ... // Other middlewares
 */
export function jsonParser(req, res, next) {
	if (req.headers["content-type"] === "application/json") {
		req.body = JSON.parse(req.body);
	}
	next();
}

/**
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Express.NextFunction} next
 * @returns {void}
 * @description
 * This middleware parses the body of the request and
 * converts it to an object.
 * @example
 * app.use(urlEncodedParser);
 * ... // Other middlewares
 */
export function urlEncodedParser(req, res, next) {
	if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
		req.body = qs.parse(req.body);
	}
	next();
}

/**
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Express.NextFunction} next
 * @returns {void}
 * @description
 * This middleware parses the cookies of the request and
 * converts it to an object.
 * @example
 * app.use(cookieParser);
 * ... // Other middlewares
 */
export function cookieParser(req, res, next) {
	req.cookies = cookie.parse(req.headers.cookie || "");
	next();
}

/**
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Express.NextFunction} next
 * @returns {void}
 * @description
 * This middleware sets the CORS headers.
 * If you want to allow all origins, you can use this middleware.
 * If you want to allow only specific origins, you can use the
 * cors package.
 * @see {@link https://www.npmjs.com/package/cors | cors package}
 * @example
 * app.use(cors);
 * ... // Other middlewares
 */
export function cors(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader("Access-Control-Allow-Headers", "*");
	next();
}

/**
 * Wrapper for the built-in Express middlewares.
 * @returns {Object}
 * @description
 * This object contains the built-in Express middlewares.
 * @example
 * import { custom } from "./middlewares.js";
 * app.use(middlewares.remove_trailing_slash);
 * ... // Other middlewares
 * app.use(middlewares.remove_x_powered_by);
 * ... // Other middlewares
 * app.use(middlewares.remove_etag);
 * ... // Other middlewares
 * @see {@link https://expressjs.com/en/guide/using-middleware.html | Using middleware}
 * @see {@link https://expressjs.com/en/guide/writing-middleware.html | Writing middleware}
 * @see {@link https://expressjs.com/en/guide/using-middleware.html#middleware.router | Using router middleware}
 * @see {@link https://expressjs.com/en/guide/using-middleware.html#middleware.router | Router middleware}
 * @see {@link https://expressjs.com/en/4x/api.html#res.removeHeader | res.removeHeader}
 * @see {@link https://expressjs.com/en/4x/api.html#res.setHeader | res.setHeader}
 */
export const custom = {
	/**
	 * @param {Express.Request} req
	 * @param {Express.Response} res
	 * @param {Express.NextFunction} next
	 * @returns {void}
	 * @description
	 * This middleware removes the trailing slash from the request url.
	 * @example
	 * app.use(middlewares.remove_trailing_slash);
	 */
	remove_trailing_slash: (req, res, next) => {
		if (req.url.endsWith("/") && req.url.length > 1) {
			req.url = req.url.slice(0, -1);
		}
		next();
	},
	/**
	 * @param {Express.Request} req
	 * @param {Express.Response} res
	 * @param {Express.NextFunction} next
	 * @returns {void}
	 * @description
	 * This middleware removes the X-Powered-By header from the response.
	 * @example
	 * app.use(middlewares.remove_x_powered_by);
	 */
	remove_x_powered_by: (req, res, next) => {
		res.removeHeader("X-Powered-By");
		next();
	},
	/**
	 * @param {Express.Request} req
	 * @param {Express.Response} res
	 * @param {Express.NextFunction} next
	 * @returns {void}
	 * @description
	 * This middleware removes the ETag header from the response.
	 */
	remove_etag: (req, res, next) => {
		res.removeHeader("ETag");
		next();
	},
	/**
	 * @param {Express.Request} req
	 * @param {Express.Response} res
	 * @param {Express.NextFunction} next
	 * @returns {void}
	 * @description
	 * This middleware removes the X-Content-Type-Options header from the response.
	 */
	remove_x_content_type_options: (req, res, next) => {
		res.removeHeader("X-Content-Type-Options");
		next();
	},
};
