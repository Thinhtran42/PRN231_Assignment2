import { Menu } from 'antd'
import {
  UserOutlined,
  HomeOutlined,
  ReadOutlined,
  BookOutlined,
} from '@ant-design/icons'
import Layout from 'antd/es/layout/layout'
import { useNavigate } from 'react-router-dom'

const { Sider } = Layout

const items = [
  { icon: <HomeOutlined />, label: 'Home' },
  { icon: <UserOutlined />, label: 'User' },
  { icon: <ReadOutlined />, label: 'Publishers-Authors' },
  { icon: <BookOutlined />, label: 'Books', path: 'books' },
]

const SiderComponent = () => {
  const navigate = useNavigate()

  const handleMenuSelect = ({ key }) => {
    const selectedItem = items[parseInt(key, 10) - 1]
    if (selectedItem.path) {
      navigate(selectedItem.path)
    }
  }
  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      onBreakpoint={(broken) => {
        console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      <div className='demo-logo-vertical' />
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['4']}
        onSelect={handleMenuSelect}
      >
        {items.map((item, index) => (
          <Menu.Item
            key={String(index + 1)}
            icon={item.icon}
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}

export default SiderComponent
