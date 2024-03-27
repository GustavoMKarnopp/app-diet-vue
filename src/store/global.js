import axios from 'axios';

const API_DB_BACK_DIET = axios.create({
  baseURL: process.env.VUE_APP_DEV,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export default {

  // EXECUTA UM POST CRIANDO USER
  async createUSER(){
    return await API_DB_BACK_DIET.post();
  },
};
