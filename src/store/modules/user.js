// 存放用户信息，包括 token 等
import { makeAutoObservable } from 'mobx'
class UserStore {
  userInfo = {}
  constructor() {
    makeAutoObservable(this)
  }
  setUserInfo = user => {
    this.userInfo = user
  }


  get isLogin() {
    return this.userInfo.token
  }
  removeUser() {
    this.userInfo = []
  }
}

export default UserStore