import { Card } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
function Login() {
  return (
    <div className='login'>
      <Card className='login-container'>
        <img src={logo} className="login-logo" alt="" />
        {/* 登陆表单 */}
      </Card>
    </div>
  )
}

export default Login
