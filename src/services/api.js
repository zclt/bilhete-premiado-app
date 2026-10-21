import axios from 'axios';

const api = axios.create({
    baseURL: 'https://servicebus3.caixa.gov.br'
});

export default api;