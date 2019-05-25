import axios from 'axios'
import { getToken } from '../Helpers/authentication'

const instance = () => {
  const token = getToken()
  return axios.create({
    baseURL: 'https://senac-shopping-list-api.herokuapp.com/v1/',
    headers: {'Authorization': token
      ? `Bearer ${token}` : ''}
  })
}

export default instance()
