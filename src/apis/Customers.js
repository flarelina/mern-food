import axios from '../plugins/axios'

const user = axios('users');

// Register new users
const register = (data) => {
  return user.post('/add', data)
};

export default {
  register
}
