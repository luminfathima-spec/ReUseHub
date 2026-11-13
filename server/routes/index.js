const express = require('express');
const router = express.Router();
const healthRoutes = require('./healthRoutes');

// Mount health routes at /api (or directly under /api/health)
router.use('/', healthRoutes);

module.exports = router;
