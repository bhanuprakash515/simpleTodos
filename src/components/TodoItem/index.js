import './index.css'

const TodoItem = props => {
  const {TodoItems, onDeleteTodo} = props
  const {title, id} = TodoItems

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="list-container">
      <p className="heading">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
