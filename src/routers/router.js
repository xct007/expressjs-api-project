/**
 * @fileoverview Router for /api/echo
 * @description
 * This module defines the router for /.
 * It exports an Express router instance.
 * It is mounted at / in src/app.js.
 * @see {@link module:src/router/lib/echo}
 * @module src/router/echo
 * @requires express
 * @requires src/router/lib/echo
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