import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Existing functions
export const analyzeText = async (text) => {
  const response = await axios.post(`${API_URL}/text/analyze-text`, { text });
  return response.data;
};

export const analyzeImage = async (image) => {
  const response = await axios.post(`${API_URL}/image/analyze-image`, { image });
  return response.data;
};

// New function for chat
export const sendMessage = async (message) => {
  const response = await axios.post(`${API_URL}/chat/send`, { message });
  return response.data.response;
};