/**
 * @api {get} /echo Echo
 * @apiName Echo
 * @apiGroup API
 * @apiVersion 0.0.1
 * @apiDescription
 * This api is mounted at /api.
 * This router is mounted at /.
 * This route is mounted at /echo.
 * This route handles GET requests to /echo.
 * This route sends a JSON response.
 * This route uses the echo function from src/api/lib/echo.js.
 * @apiSuccess {Boolean} status The status of the response.
 * @apiSuccess {String} message The message of the response.
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "message": "Hello world"
 * }
 */
export default function echo(req, res) {
	res.status(200).json({
		status: true,
		message: "Hello world, from the API!",
	});
}
