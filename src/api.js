// src/api.js

import axios from 'axios';

const API_BASE_URL = 'https://your-api-endpoint.com';

// Function to make a POST request
export const postData = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/your-post-endpoint`, data);
    return response.data;
  } catch (error) {
    console.error('Error making POST request:', error);
    throw error;
  }
};

// Function to make a PUT request
export const putData = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/your-put-endpoint/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error making PUT request:', error);
    throw error;
  }
};
