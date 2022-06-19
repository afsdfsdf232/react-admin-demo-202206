import Mock from 'mockjs'

export default Mock.mock('/api/login', 'post', req => {
  const { username, password } = JSON.parse(req.body);
  if (username === '15812345678' && password === '123456') {
    return {
      code: 0,
      message: '成功',
      data: {
        token: 'saichsdhatgdysn',
        username,
        nickName: 'Admin'
      }
    }
  } else {
    return {
      code: -1,
      message: '账号或者密码错误'
    }
  }
})