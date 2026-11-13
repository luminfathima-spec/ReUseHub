const mongoose = require('mongoose');

/**
 * Maps Mongoose readyState integer to a descriptive human-readable string.
 * 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
 */
const getDBStatus = () => {
  const state = mongoose.connection.readyState;
  switch (state) {
    case 1:
      return {
        status: 'connected',
        readyState: 1,
        host: mongoose.connection.host || 'remote',
        name: mongoose.connection.name || 'reusehub_db',
        isConnected: true
      };
    case 2:
      return {
        status: 'connecting',
        readyState: 2,
        host: null,
        name: 'reusehub_db',
        isConnected: false
      };
    case 3:
      return {
        status: 'disconnecting',
        readyState: 3,
        host: null,
        name: 'reusehub_db',
        isConnected: false
      };
    case 0:
    default:
      return {
        status: 'disconnected',
        readyState: 0,
        host: null,
        name: 'reusehub_db',
        isConnected: false
      };
  }
};

/**
 * Connects to MongoDB database using Mongoose.
 * Uses process.env.MONGO_URI without hardcoded credentials.
 */
const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  // Validate presence and detect placeholder credentials
  if (!mongoURI || mongoURI === 'your_mongodb_connection_string' || mongoURI.includes('<username>') || mongoURI.includes('<password>')) {
    console.warn('\x1b[33m%s\x1b[0m', '---------------------------------------------------------');
    console.warn('\x1b[33m%s\x1b[0m', '[MongoDB Warning]: Placeholder or missing MONGO_URI detected.');
    console.warn('\x1b[33m%s\x1b[0m', 'Please update server/.env with your valid MongoDB Atlas URI.');
    console.warn('\x1b[33m%s\x1b[0m', 'The server will run in disconnected-database mode.');
    console.warn('\x1b[33m%s\x1b[0m', 'Health check will accurately report database: disconnected.');
    console.warn('\x1b[33m%s\x1b[0m', '---------------------------------------------------------');
    return false;
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      dbName: 'reusehub_db',
      serverSelectionTimeoutMS: 5000, // Timeout fast instead of hanging request cycles
    });

    console.log('\x1b[32m%s\x1b[0m', `[MongoDB Connected]: Host -> ${conn.connection.host} | Database -> ${conn.connection.name}`);
    return true;
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', `[MongoDB Connection Error]: ${error.message}`);
    console.warn('\x1b[33m%s\x1b[0m', 'Server is running, but database connection could not be established.');
    return false;
  }
};

// Event listeners for connection monitoring
mongoose.connection.on('disconnected', () => {
  console.warn('\x1b[33m%s\x1b[0m', '[MongoDB]: Connection lost/disconnected.');
});

mongoose.connection.on('error', (err) => {
  console.error('\x1b[31m%s\x1b[0m', `[MongoDB Event Error]: ${err.message}`);
});

module.exports = {
  connectDB,
  getDBStatus
};
