/**
 * @fileoverview API routes.
 * @module src/api/api
 * @requires express
 * @requires src/api/echo
 * @exports router
 */

/**
 * @description
 * This module defines the API routes.
 * It exports an Express router instance.
 * It is mounted at /api in src/app.js.
 */
import echo from "./lib/echo.js";

/**
 * @description
 * Express router instance.
 */
import { Router } from "express";

/**
 * @description
 * This is the Express router instance.
 */
const router = Router();

/**
 * @description
 * This is the router for /api.
 * It handles GET requests to /api.
 * It sends a JSON response.
 * It uses the echo function from src/api/lib/echo.js.
 * @see {@link module:src/api/lib/echo}
 */
router.get("/echo", echo);

export default router;
