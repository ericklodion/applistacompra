import client from '../Providers/client'

export const login = credentials =>
  client.post('users/login', credentials)

export const createaccount = model =>
  client.post('users/signup', model)
