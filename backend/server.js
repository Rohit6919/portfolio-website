const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// ✅ Use only the detailed CORS configuration
app.use(cors({
  origin: 'https://rohit-portfolio-ivory.vercel.app',  // Match your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error(err));

// Routes
app.use('/api/contact', contactRoutes);

module.exports = app;
