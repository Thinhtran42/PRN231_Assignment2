import { useEffect, useState } from 'react'
import moment from 'moment'
import {
  createBook,
  deleteBook,
  getBookDetail,
  getBooks,
  updateBook,
} from '../services/BookServices'
import { Table, Button } from 'antd'
import { Modal } from 'antd'
import FormBookComponent from './FormBookComponent'

const BooksTableComponent = () => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title), // Sắp xếp theo tiêu đề
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => a.type.localeCompare(b.type), // Sắp xếp theo loại
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price, // Sắp xếp theo giá
    },
    {
      title: 'Advance',
      dataIndex: 'advance',
      key: 'advance',
      sorter: (a, b) => a.advance - b.advance, // Sắp xếp theo tiền tạm ứng
    },
    {
      title: 'Royalty',
      dataIndex: 'royalty',
      key: 'royalty',
      sorter: (a, b) => a.royalty - b.royalty, // Sắp xếp theo tiền hoa hồng
    },
    {
      title: 'ytdSales',
      dataIndex: 'ytdSale',
      key: 'ytdSale',
      sorter: (a, b) => a.ytdSale - b.ytdSale, // Sắp xếp theo doanh số trong năm
    },
    {
      title: 'publishedDate',
      dataIndex: 'publishedDate',
      key: 'publishedDate',
      sorter: (a, b) => new Date(a.publishedDate) - new Date(b.publishedDate), // Sắp xếp theo ngày xuất bản
      render: (text, record) => (
        <span>{moment(text).format('DD-MM-YYYY')}</span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div>
          {userRole === 'admin' && (
            <>
              <Button
                type='primary'
                onClick={() => handleEdit(record)}
                style={{ marginRight: '10px' }} // Khoảng cách với nút kế tiếp
              >
                Edit
              </Button>
              <Button
                type='primary'
                danger
                onClick={() => handleDelete(record)}
              >
                Delete
              </Button>
            </>
          )}
        </div>
      ),
    },
  ]
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [formData, setFormData] = useState(null)
  const [formType, setFormType] = useState('create')

  // luu cai bookId de gui di api update
  const [bookId, setBookId] = useState(null)

  const handleFormSubmit = (values) => {
    if (formType === 'create') {
      // Gọi API tạo mới sách khi form tạo mới được gửi đi
      createBook(values)
        .then((response) => {
          // Gọi lại API lấy danh sách sách để cập nhật lại dữ liệu
          getBooks()
            .then((response) => {
              setBooks(response)
              setLoading(false)
            })
            .catch((error) => {
              console.error('Error from getBooks:', error)
              setLoading(false)
            })
        })
        .catch((error) => {
          console.error('Error from createBook:', error)
        })
    } else if (formType === 'update') {
      // Gọi API cập nhật thông tin sách khi form cập nhật được gửi đi
      updateBook(bookId, values)
        .then((response) => {
          // Gọi lại API lấy danh sách sách để cập nhật lại dữ liệu
          getBooks()
            .then((response) => {
              setBooks(response)
              setLoading(false)
            })
            .catch((error) => {
              console.error('Error from getBooks:', error)
              setLoading(false)
            })
        })
        .catch((error) => {
          console.error('Error from updateBook:', error)
        })
    }
    // Đóng modal sau khi xử lý form
    setIsModalVisible(false)
  }

  const handleDelete = (record) => {
    // Gọi API xóa cuốn sách khi người dùng bấm nút "Delete"
    // Ví dụ:
    deleteBook(record.bookId)
      .then((response) => {
        // Cập nhật lại danh sách sách sau khi xóa thành công
        getBooks()
          .then((response) => {
            setBooks(response)
            setLoading(false)
          })
          .catch((error) => {
            console.error('Error from getBooks:', error)
            setLoading(false)
          })
      })
      .catch((error) => {
        console.error('Error from deleteBook:', error)
      })
  }

  const handleEdit = (record) => {
    setBookId(record.bookId)
    getBookDetail(record.bookId) // Gọi API lấy thông tin chi tiết của cuốn sách
      .then((detail) => {
        if (detail.publishedDate) {
          detail.publishedDate = moment(
            detail.publishedDate,
            'YYYY-MM-DDTHH:mm:ss'
          ).format('DD/MM/YYYY')
        }
        setFormData(detail) // Cập nhật biến state formData với dữ liệu chi tiết của cuốn sách
        showModal('update') // Hiển thị modal chứa form với dữ liệu chi tiết đã được cập nhật
      })
      .catch((error) => {
        console.error('Error getting book detail:', error)
      })
  }
  const handleCreate = () => {
    setFormData(null)
    showModal('create')
  }

  const handleTableChange = (pagination, filters, sorter) => {
    console.log('Sorter:', sorter)
  }

  const userRole = 'admin'

  useEffect(() => {
    getBooks()
      .then((response) => {
        const updatedBooks = response.map((book) => {
          return {
            ...book,
            publishedDate:
              book.publishedDate &&
              typeof book.publishedDate === 'string' &&
              moment(book.publishedDate, 'YYYY-MM-DDTHH:mm:ss').isValid()
                ? moment(book.publishedDate, 'YYYY-MM-DDTHH:mm:ss').format(
                    'DD-MM-YYYY'
                  )
                : 'Invalid Date',
          }
        })
        setBooks(updatedBooks)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error from getBooks:', error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (formData !== null) {
      showModal(formData ? 'update' : 'create')
    }
  }, [formData])

  const showModal = (type) => {
    setFormType(type)
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <div>
      <Button
        type='primary'
        style={{
          backgroundColor: 'green',
          borderColor: 'green',
          color: 'white',
          marginBottom: '20px',
        }}
        onClick={() => handleCreate()}
      >
        Create Book
      </Button>

      <Modal
        title={formType === 'update' ? 'Update book' : 'Create a new book'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // Ẩn footer mặc định của modal
      >
        {/* Truyền props type='create' và onSubmit={handleFormSubmit} cho BookForm */}
        <FormBookComponent
          type={formType}
          initialValues={formType === 'update' ? formData : null}
          onSubmit={handleFormSubmit}
        />
      </Modal>

      <Table
        columns={columns}
        dataSource={books}
        s
        loading={loading}
        pagination={{ pageSize: 4 }}
        onChange={handleTableChange}
        rowKey={(record) => record.id}
      />
    </div>
  )
}

export default BooksTableComponent
