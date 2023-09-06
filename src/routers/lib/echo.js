/**
 * @fileoverview This file contains the echo function.
 * @module src/api/lib/echo
 */

/**
 * @description
 * This function sends a JSON response.
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @returns {void}
 * @example
 * echo(req, res);
 * ... // Other code
 */
export default function echo(req, res) {
	res.status(200).json({
		status: true,
		message: "Hello world, from /",
	});
}
// //
// // With this snippet from src/api/lib/echo.js:
// export default function echo(req, res) {
// 	res.status(200).json({
// 		status: true,
// 		message: "Hello world",
// 	});
// }
// //
