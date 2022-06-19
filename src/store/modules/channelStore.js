// 存放用户信息，包括 token 等
import { makeAutoObservable } from 'mobx'
class ChannelStore {
  channelList = []
  constructor() {
    makeAutoObservable(this)
  }
}

export default ChannelStore