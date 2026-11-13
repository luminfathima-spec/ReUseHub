/**
 * 404 Not Found Middleware
 * Intercepts requests to undefined routes and passes a 404 error to the error handler.
 */
const notFound = (req, res, next) => {
  const error = new Error(`Resource Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

module.exports = notFound;
