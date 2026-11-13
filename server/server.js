const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from server/.env
dotenv.config({ path: path.join(__dirname, '.env') });

const app = require('./app');
const { connectDB } = require('./config/db');

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Bootstrap ReUseHub Server
 */
const startServer = async () => {
  // Attempt MongoDB Connection
  await connectDB();

  // Start HTTP Server
  const server = app.listen(PORT, () => {
    console.log('\x1b[35m%s\x1b[0m', '=========================================================');
    console.log('\x1b[36m%s\x1b[0m', '   ReUseHub Backend API Server Started Successfully');
    console.log('\x1b[35m%s\x1b[0m', '=========================================================');
    console.log(` * Environment : ${NODE_ENV}`);
    console.log(` * Port        : ${PORT}`);
    console.log(` * Local URL   : http://localhost:${PORT}`);
    console.log(` * Health Check: http://localhost:${PORT}/api/health`);
    console.log('\x1b[35m%s\x1b[0m', '=========================================================');
  });

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err) => {
    console.error('\x1b[31m%s\x1b[0m', `[Unhandled Rejection]: ${err.message}`);
  });

  // Handle uncaught exceptions
  process.on('uncaughtException', (err) => {
    console.error('\x1b[31m%s\x1b[0m', `[Uncaught Exception]: ${err.message}`);
    process.exit(1);
  });

  // Graceful shutdown
  const handleShutdown = (signal) => {
    console.log(`\n[${signal}] Received. Shutting down gracefully...`);
    server.close(() => {
      console.log('HTTP server closed.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => handleShutdown('SIGTERM'));
  process.on('SIGINT', () => handleShutdown('SIGINT'));
};

startServer();

