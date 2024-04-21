import { Card, Flex } from 'antd'
import FormLoginComponent from '../components/FormLoginComponent'
const cardStyle = {
  width: 900,
  height: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}
const imgStyle = {
  display: 'block',
  width: 300,
}

const Login = () => {
  return (
    <div style={{ backgroundColor: '#f0f2f5', padding: '20px' }}>
      <Card
        style={cardStyle}
        size='default'
        styles={{
          body: {
            padding: 0,
            overflow: 'hidden',
          },
        }}
      >
        <Flex
          justify='space-between'
          style={{ height: '100%' }}
        >
          <img
            alt='avatar'
            src='https://cdn.britannica.com/83/78183-004-345353F4/Stack-books.jpg'
            style={imgStyle}
          />
          <Flex
            vertical
            align='flex-end'
            justify='space-between'
            style={{
              padding: 32,
              marginLeft: 100,
            }}
          >
            <FormLoginComponent />
          </Flex>
        </Flex>
      </Card>
    </div>
  )
}

export default Login
