import Todos from './components/Todos'
import NewTodo from './components/NewTodo'
import Todo from './models/todo'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text)
    setTodos((prevTodos)=>{ return prevTodos.concat(newTodo)})
  }
  
const subTodoHandler = (id: string) =>{
  // const newArrays = todos.filter(todo => !(todo.text===text))
  console.log("gówno ożyło")
  console.log("id",id)
  console.log("todos",todos)
  console.log("filtry",todos.filter(todo => !(todo.id===id)))
  setTodos((prevTodos)=>prevTodos.filter(todo => !(todo.id===id)))
}

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onSubTodo={subTodoHandler} />
    </div>
  )
}

export default App
