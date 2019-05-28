import client from '../Providers/client'

export const getCategories = () =>
  client.get('categories')

