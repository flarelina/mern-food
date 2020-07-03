import axios from '../plugins/axios'

const user = axios('users');

// login
const login = (data) => {
  return user.post('/login', data)
};

export default {
  login
}
