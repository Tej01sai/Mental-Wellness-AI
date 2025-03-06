const express = require('express');
const router = express.Router();
const { generateResponse } = require('../ai-models/chat-model');

// POST /api/chat/send
router.post('/send', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await generateResponse(message); // Call OpenAI function
    res.json({ response });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;