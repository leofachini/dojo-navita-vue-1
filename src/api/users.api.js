import axios from 'axios';

export default {

  async getUsers() {
    const uri = 'https://navita-dojo.free.beeceptor.com/users/all';
    return axios.get(uri);
  },
};
