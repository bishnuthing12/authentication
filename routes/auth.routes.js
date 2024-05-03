const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
/**
 * @openapi
 * /register:
 *   post:
 *     tags:
 *       - user
 *     summary: Register a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the user
 *               password:
 *                 type: string
 *                 description: The password of the user
 *     responses:
 *       200:
 *         description: Registration successful
 *       409:
 *         description: Conflict
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   description: The email of the user
 *                 password:
 *                   type: string
 *                   description: The password of the user
 *                 _id:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 */
router.post("/register", authController.register);

/**
 * @openapi
 * /login:
 *   post:
 *     tags:
 *       - user
 *     summary: Log in a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the user
 *               password:
 *                 type: string
 *                 description: The password of the user
 *     responses:
 *       200:
 *         description: User successfully logged in
 *       401:
 *         description: Unauthorized - Invalid credentials
 *       404:
 *         description: Not Found - User not found
 */

router.post("/login", authController.login);
/**
 * @openapi
 * /refresh:
 *    post:
 *     tags:
 *       - user
 *     summary: Refresh token
 *     description: Endpoint to refresh the authentication token.
 *     responses:
 *       200:
 *         description: New authentication token generated successfully.
 *       401:
 *         description: Unauthorized - Invalid or expired refresh token.
 *       403:
 *         description: Forbidden - Refresh token not provided or invalid.
 *       500:
 *         description: Internal Server Error - Failed to refresh token due to server error.
 */

router.post("/refresh-token", authController.refreshToken);

/**
 * @openapi
 * /logout:
 *   delete:
 *     tags:
 *       - user
 *     summary: Logout a user
 *     description: Endpoint to logout a user by invalidating their authentication token.
 *     responses:
 *       200:
 *         description: User successfully logged out.
 *       401:
 *         description: Unauthorized - Authentication token is missing or invalid.
 *       500:
 *         description: Internal Server Error - Failed to logout due to server error.
 */

router.delete("/logout", authController.logout);

module.exports = router;
