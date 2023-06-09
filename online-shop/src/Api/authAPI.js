'use client';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const mock = new MockAdapter(axios);


mock.onPost('/api/login').reply(200, { token: 'mocked_token' });


mock.onPost('/api/signup').reply(200, { message: 'User registered successfully' });


export const loginAPI = async (credentials) => {
  try {
    const response = await axios.post('/api/login', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signupAPI = async (userData) => {
  try {
    const response = await axios.post('/api/signup', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
