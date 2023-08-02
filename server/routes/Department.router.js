const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/Department.controller');
const User_middleware = require("../middleware/User.middleware")




/**
 * @swagger
 * /api/department/add:
 *   post:
 *     summary: Add a new department
 *     tags: [Departments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the department
 *                 example: "Finance"
 *               Dep_id:
 *                 type: string
 *                 description: Department id 
 *                 example: "Dep123"
 *     responses:
 *       200:
 *         description: Successfully added department
 *       400:
 *         description: Bad request, missing or invalid data
 *       500:
 *         description: Internal server error
 */
router.post('/add',  controller.addDepartment);
/**
 * @swagger
 * tags:
 *   name: Departments
 *   description: Department management
 */

/**
 * @swagger
 * /api/department/getData:
 *   get:
 *     summary: Get all departments
 *     tags: [Departments]
 *     responses:
 *       200:
 *         description: List of departments
 */
router.get('/getData',controller.getDepartents);
// router.put('/login' , controller.login)
// router.put("/isUserCheck", User_middleware, controller.isUserCheck);


module.exports = router;
