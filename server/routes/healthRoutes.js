const express = require('express');
const router = express.Router();
const { getHealthStatus } = require('../controllers/healthController');

/**
 * Health check route
 */
router.get('/health', getHealthStatus);

module.exports = router;
