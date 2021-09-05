import CounterStore from './CounterStore/CounterStore'
import TodoListStore from './TodoStore/TodoListStore'
import { createContext, useContext } from 'react'

/**
 * 合并store
 */
class RootStore {

  constructor () {
    this.counterStore = new CounterStore()
    this.todoListStore = new TodoListStore()
  }

}

// 得到上下文
const RootStoreContext = createContext()

const RootStoreProvider = ({store, children}) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  )
}

const useRootStore = () => {
  return useContext(RootStoreContext)
}

export {
  RootStore,
  RootStoreProvider,
  useRootStore
}