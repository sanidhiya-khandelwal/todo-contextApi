import TodoProvider from './contexts/index'
import './App.css'
import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([]);

  /**
   * Add Todo functionality
   */
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  // Update todo
  const updateTodo = (id, todo) => {
    setTodos(prev =>
      prev.map(prevTodo => (prevTodo.id === id ? { ...prevTodo, todo: todo } : prevTodo))
    )
  }

  //delete todo
  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }
  // toggle
  const toggleComplete = (id) => {
    setTodos(prevTodos => prevTodos.map(prevTodo => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>

    </TodoProvider>
  )
}

export default App
