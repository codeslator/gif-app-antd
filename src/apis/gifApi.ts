import axios, { AxiosInstance } from 'axios';

export const gifApi: AxiosInstance = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/search?api_key=uXKwXsJjdnGOiJYVg1uEV7TQcDXAMU7W&limit=12'
});