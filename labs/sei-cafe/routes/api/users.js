// (React) src/components/SignUpForm/SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express) <--> Routes



const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersCtrl.create);

module.exports = router;



