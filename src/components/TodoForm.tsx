import React, { useState } from 'react'

interface TodoFormProps {
  onAddTodo: (text: string) => void
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todoText.trim()) {
      onAddTodo(todoText.trim())
      setTodoText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={todoText}
        onChange={handleInputChange}
      />
      <button type="submit">추가2</button>
    </form>
  )
}

export default TodoForm
