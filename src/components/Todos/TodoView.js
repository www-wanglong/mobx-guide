import { observer } from 'mobx-react-lite'

function TodoView({ todo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input
          checked={todo.completed}
          className="toggle"
          type="checkbox"
          onChange={todo.toggle}
        />
          <label>{todo.title}</label>
        <button className="destroy" />
      </div>
      <input className="edit" />
    </li>
  )
}

export default observer(TodoView)
