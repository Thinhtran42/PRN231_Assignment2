import { Layout, theme } from 'antd'
import SiderComponent from '../components/SiderComponent'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { Outlet, Route, Routes } from 'react-router-dom'
import BooksTableComponent from '../components/BooksTableComponent'

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  return (
    <div style={{ minHeight: '100vh', minWidth: '100vw' }}>
      <Layout style={{ minHeight: '100vh', minWidth: '100%' }}>
        <SiderComponent />
        <Layout>
          <Header
            style={{
              padding: 50,
              background: colorBgContainer,
            }}
          >
            <h1>Book Store</h1>
          </Header>
          <Content
            style={{
              margin: '24px 16px 0',
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Routes>
                <Route
                  path='/books'
                  element={<BooksTableComponent />}
                />
              </Routes>
              <Outlet />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default MainLayout
