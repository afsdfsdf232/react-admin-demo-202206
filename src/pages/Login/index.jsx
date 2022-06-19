import { Card, Form, Input, Checkbox, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useStore } from '@/store'
import { http } from '@/utils'
import '@/mock/login'
import logo from '@/assets/logo.png'
import './index.scss'
function Login() {
  const { user } = useStore()
  const navigate = useNavigate()
  async function  onFinish  ({password, username}) {
    // 表单验证成功执行函数
    const { code, data } = await http.post('/api/login', {password, username});
    if (code === 0) {
      user.setUserInfo(data)
      navigate('/', { replace: true })
    }
  }
  
  function onFinishFailed(values) {
    console.log('onFinishFailed:', values)
    // 表单验证失败执行函数
  }
  return (
    <div className='login'>
      <Card className='login-container'>
        <img src={logo} className="login-logo" alt="" />
        {/* 登陆表单 */}
        <Form 
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{ remember: true, username: '15812345678', password: "123456" }}>
          <Form.Item
            name="username"
            rules={[
              { required: true, message: '请输入手机号!' },
              { pattern: /^1[3-9]\d{9}$/, message: '手机号码格式不正确'}
            ]}
          >
            <Input size='large' placeholder='请输入手机号'></Input>
          </Form.Item>
          <Form.Item 
             name="password"
             rules={[
              { required: true, message: '请输入密码!' },
              { len: 6, message: '请输入6位数密码'}
            ]}
          >
            <Input.Password size='large' placeholder='请输入密码'></Input.Password>
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className='login-checkbox-label'>
              我已阅读并同意 【用户协议】和【隐私条款】
            </Checkbox>
          </Form.Item>
         < Form.Item>
          <Button type='primary' htmlType='submit' block size='large'>登陆</Button>
         </ Form.Item>
          
        </Form>
      </Card>
    </div>
  )
}

export default Login
