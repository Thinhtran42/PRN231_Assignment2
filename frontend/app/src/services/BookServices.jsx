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

export const createBook = async (bookData) => {
  return BookServices.post('/books', bookData)
    .then((response) => response.data)
    .catch((error) => {
      throw error
    })
}

export const updateBook = async (bookId, updatedData) => {
  console.log(updatedData)
  return BookServices.put(`/books/${bookId}`, updatedData)
    .then((response) => response.data)
    .catch((error) => {
      throw error
    })
}

export const deleteBook = async (bookId) => {
  return BookServices.delete(`/books/${bookId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error
    })
}

export const getBookDetail = async (bookId) => {
  return BookServices.get(`/books/${bookId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error
    })
}

export default BookServices
