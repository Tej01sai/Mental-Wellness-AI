const express = require('express');
const cors = require('cors');
const textRoutes = require('./routes/textRoutes');
const chatRoutes = require('./routes/chatRoutes'); // Correct path

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/text', textRoutes);
app.use('/api/chat', chatRoutes); // Add chat routes

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));