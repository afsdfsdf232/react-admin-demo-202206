import React from 'react'
import UserStore from './modules/user';
import ChannelStore from './modules/channelStore'
class Store {
  constructor() {
    this.user = new UserStore()
    this.channelStore = new ChannelStore()
  }
}

// 实例化根
const store = new Store()

const context = React.createContext(store)

const useStore = () => React.useContext(context)

export { useStore }