/**
 * @fileoverview Router for /api/echo
 * @description
 * This file defines the router for /api/echo.
 * It exports an Express router instance.
 * It is mounted at /api/echo in src/api/api.js.
 * It handles GET requests to /api/echo.
 * It sends a JSON response.
 * It uses the echo function from src/api/lib/echo.js.
 * @see {@link module:src/api/lib/echo}
 * @module src/api/echo
 * @requires express
 * @requires src/api/lib/echo
 * @exports router
 */

/**
 * @description
 * Express router instance.
 */
import { Router } from "express";

/**
 * @description
 * This is the Express router instance.
 * @see {@link https://expressjs.com/en/guide/routing.html | Routing}
 */
import echo from "./lib/echo.js";

/**
 * @description
 * This is the Express router instance.
 * @see {@link https://expressjs.com/en/guide/routing.html | Routing}
 */
const router = Router();

/**
 * @description
 * This is the router for /.
 * It handles GET requests to /.
 * It sends a JSON response.
 * It uses the echo function from src/routers/lib/echo.js.
 * @see {@link module:src/routers/lib/echo}
 */
router.get("/", echo);

export default router;