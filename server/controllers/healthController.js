const { getDBStatus } = require('../config/db');

/**
 * @desc   Get system health status (Server, Database, Environment)
 * @route  GET /api/health
 * @access Public
 */
const getHealthStatus = (req, res) => {
  const db = getDBStatus();

  const healthData = {
    application: 'ReUseHub',
    tagline: 'A Community-Based Product Reuse, Donation and Exchange Platform',
    server: 'running',
    status: db.isConnected ? 'healthy' : 'degraded',
    database: {
      status: db.status,
      connected: db.isConnected,
      name: db.name,
      host: db.host
    },
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    message: db.isConnected
      ? 'All services operational. MongoDB is connected.'
      : 'Server is active, but MongoDB is currently disconnected. Please configure valid MongoDB Atlas credentials in server/.env.'
  };

  // Return HTTP 200 with structured diagnostic state
  return res.status(200).json(healthData);
};

module.exports = {
  getHealthStatus
};
