/**
 * Centralized Error Handling Middleware
 * Catches all forwarded errors and formats a uniform JSON response.
 */
const errorHandler = (err, req, res, next) => {
  // If status is still 200, default to 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    timestamp: new Date().toISOString()
  });
};

module.exports = errorHandler;
