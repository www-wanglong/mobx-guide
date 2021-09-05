import { makeAutoObservable } from 'mobx'

class CounterStore {

  count = 0

  constructor() {
    // 将参数对象的属性设置为observable state
    // 将方法设置为action
    // 参数2  reset变成普通的方法
    // 参数3 {autoBind: true} 配置对象 使action方法始终拥有正确的this指向
    makeAutoObservable(this, {}, {autoBind: true})
  }

  // action方法
  increment() {
    this.count += 1
  }

  reset() {
    this.count = 0
  }

}

export default CounterStore