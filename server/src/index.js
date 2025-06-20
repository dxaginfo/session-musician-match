require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { createServer } = require('http');
const { Server } = require('socket.io');

// Database connections
const connectDB = require('./config/database');

// Route imports
const authRoutes = require('./api/routes/auth');
const userRoutes = require('./api/routes/users');
const musicianRoutes = require('./api/routes/musicians');
const projectRoutes = require('./api/routes/projects');
const bookingRoutes = require('./api/routes/bookings');
const paymentRoutes = require('./api/routes/payments');
const messageRoutes = require('./api/routes/messages');

// Initialize app
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Connect to database
connectDB();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/musicians', musicianRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/messages', messageRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Session Musician Match API' });
});

// Socket.io connection handler
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  // Handle private messages
  socket.on('private_message', (data) => {
    socket.to(data.recipientId).emit('private_message', {
      senderId: data.senderId,
      message: data.message,
      timestamp: new Date()
    });
  });

  // Handle joining a conversation room
  socket.on('join_conversation', (conversationId) => {
    socket.join(conversationId);
  });

  // Handle booking notifications
  socket.on('booking_update', (data) => {
    socket.to(data.recipientId).emit('booking_notification', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: true,
    message: err.message || 'Internal Server Error'
  });
});

// Start server
const PORT = process.env.PORT || 8000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For testing