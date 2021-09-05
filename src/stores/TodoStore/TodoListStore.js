import TodoViewStore from './TodoViewStore'
import { action, computed, makeObservable, observable, runInAction } from 'mobx'
import axios from 'axios'

/**
 * 管理todo数组
 */
class TodoListStore {

  todos = []

  constructor (todos) {
    if (!!todos) {
      this.todos = todos
    }
    this.loadTodos()

    // 手动处理this里面的
    makeObservable(this, {
      todos: observable,
      createTodo: action,
      unCompletedTodoCount: computed
    })
  }

  createTodo(title) {
    this.todos.push(new TodoViewStore(title))
  }

  // 异步方法不能作为action方法
  async loadTodos() {
    let todos =  await axios.get('http://localhost:3005/todos').then( response => response.data)
    runInAction(() => {
      todos.forEach( todo => {
        this.todos.push(new TodoViewStore(todo.title))
      })
    })

  }

  get unCompletedTodoCount() {
    // 有缓存
    console.log('unCompletedTodoCount')
    return this.todos.filter( todo => !todo.completed).length
  }

}
export default TodoListStore