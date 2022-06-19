//  路由鉴权 判断是否登陆 登陆跳转首页 否则跳转登陆页面
import { useStore } from '@/store'
import { Navigate } from 'react-router-dom'
// 高阶组件
function AuthComponent ({children}) {
  const { user } = useStore()
  const isToken = user.isLogin
  if (isToken) {
    return <>{children}</>
  } else {
    return (
     <Navigate to="/login" replace/>
    )
  }
}

export default AuthComponent
