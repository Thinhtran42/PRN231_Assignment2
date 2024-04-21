import { useEffect, useState } from 'react'
import { getBooks } from '../services/BookServices'
import { Table, Button } from 'antd'

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

  const handleTableChange = (pagination, filters, sorter) => {
    console.log('Sorter:', sorter)
  }
  const userRole = 'admin'

  const handleDelete = (record) => {}
  const handleEdit = (record) => {}

  useEffect(() => {
    getBooks()
      .then((response) => {
        setBooks(response)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error from getBooks:', error)
        setLoading(false)
      })
  }, [])

  return (
    <Table
      columns={columns}
      dataSource={books}
      loading={loading}
      pagination={{ pageSize: 4 }}
      onChange={handleTableChange}
    />
  )
}

export default BooksTableComponent
