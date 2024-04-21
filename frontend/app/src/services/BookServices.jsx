import axios from 'axios'

const BASE_URL = 'https://localhost:7268/api/'

const BookServices = axios.create({
  baseURL: BASE_URL,
})

export const getBooks = async () => {
  return BookServices.get('/books')
    .then((response) => response.data)
    .catch((error) => {
      throw error
    })
}

export default BookServices
