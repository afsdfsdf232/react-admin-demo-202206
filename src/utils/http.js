// 封装 axios
// 实例化 请求拦截器 响应拦截器
import { message } from 'antd'
import axios from 'axios'
import { history } from '@/utils'

const http = axios.create({
  baseURL: '',
  timeout: 5000
})

// 添加请求拦截器
http.interceptors.request.use(config => {
  return config
}, err => Promise.reject(err));

// 响应拦截器
http.interceptors.response.use(response => {
  // 处理业务码
  const data = response.data
  if (data.code !== 0) {
    message.error(data.message)
  }
  return response.data
}, err => {
  // 超出 2xx 的状态码会抛出错误
  if (err.response.status === 401) {
    // 登陆过期，返回登陆页面
    // history.push('/login')
    history.replace('/login')
  }
  Promise.reject(err)
})

export { http }