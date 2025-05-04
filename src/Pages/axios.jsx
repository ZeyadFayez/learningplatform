import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const signupUser = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/users/signup`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  