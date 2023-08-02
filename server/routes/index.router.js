const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/user.controller');
const User_middleware = require("../middleware/User.middleware")


/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User login and registration
 */



/**
 * @swagger
 * /api/signup:
 *   post:
 *     summary: User registration
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's name
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 description: User's email address
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request, missing or invalid data
 *       500:
 *         description: Internal server error
 */
router.post('/signup', controller.register);
/**
 * @swagger
 * /api/login:
 *   put:
 *     summary: User login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email address
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Bad request, missing or invalid data
 *       401:
 *         description: Unauthorized, incorrect email or password
 *       500:
 *         description: Internal server error
 */

router.put('/login' , controller.login)
router.put("/isUserCheck", User_middleware, controller.isUserCheck);


module.exports = router;


