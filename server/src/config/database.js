const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');

// MongoDB connection
const connectMongoDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/session-musician-match';
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

// PostgreSQL connection
const sequelize = new Sequelize(
  process.env.PG_DATABASE || 'session_musician_match',
  process.env.PG_USER || 'postgres',
  process.env.PG_PASSWORD || 'postgres',
  {
    host: process.env.PG_HOST || 'localhost',
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const connectPostgreSQL = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL Connected');
  } catch (error) {
    console.error('PostgreSQL connection error:', error.message);
    process.exit(1);
  }
};

// Connect to both databases
const connectDB = async () => {
  await connectMongoDB();
  await connectPostgreSQL();
};

module.exports = connectDB;
module.exports.sequelize = sequelize;
module.exports.mongoose = mongoose;