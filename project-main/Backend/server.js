require('dotenv').config();
const express = require('express');
const Contact = require('./models/Contact');
const app = express();
const cors = require('cors');
const connectDB = require('./db');
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Default route
app.get('/', (req, res) => {
  res.send('Hello Iloan backend starts here');
});



// Route configuration
app.use('/api/getloanstatus',require('./routes/loanstatus'));
app.use('/api/contact',require('./routes/contact'));
app.use('/api/auth', require('./routes/auth')); //From GPT
app.use('/api/profile', require('./routes/user'));



// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
