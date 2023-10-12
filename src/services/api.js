import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-824u.onrender.com',
});
