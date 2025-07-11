require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL setup
const pool = new Pool({
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
});

// Create contacts table if not exists
const initializeDb = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        subject VARCHAR(100) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Database initialized');
  } catch (err) {
    console.error('Database initialization error:', err);
  }
};

initializeDb();

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Contact form submission endpoint
app.post('/api/contact/submit', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  
  // Server-side validation
  const errors = {};
  
  if (!name || name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters';
  }
  
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Valid email is required';
  }
  
  if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
    errors.phone = 'Valid 10-digit phone number starting with 6-9 is required';
  }
  
  if (!subject) {
    errors.subject = 'Please select a service';
  }
  
  if (!message || message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const result = await pool.query(
      `INSERT INTO contacts (name, email, phone, subject, message) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [name, email, phone, subject, message]
    );
    
    res.status(201).json({
      success: true,
      message: 'Form submitted successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit form',
      error: error.message
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});