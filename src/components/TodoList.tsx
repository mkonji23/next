import React from 'react'

interface Todo {
  id: number
  text: string
  done: boolean
}

interface TodoListProps {
  todos: Todo[]
  onToggleDone: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleDone }) => {
  return (
    <ul className="prose">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="relative before:block before:bg-blue-500 before:w-3 before:h-10 before:rounded-md before:absolute before:top-4 before:left-0"
          style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
          onClick={() => onToggleDone(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  )
}

export default TodoList
