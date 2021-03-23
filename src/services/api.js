import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=8e7de8b2ee9d792ab8dad643d67bf00a'
});

export default api;
