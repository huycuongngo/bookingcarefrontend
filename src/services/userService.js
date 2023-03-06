import axios from '../axios'

export const handleLoginService = (email, password) => {
  return axios.post('/api/login', { email, password })
}

export const getAllUser = () => {
  return axios.get('/api/get-all-user')
}
