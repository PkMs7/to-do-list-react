import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { TodoList } from "./components/TodoList"
import { useState, useEffect } from "react"

function App() {

  const [todoList, setTodoList] = useState([])

  useEffect( () => {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodoList(json))

  }, [])

  return (

    <>
      <Header />

      <main className="p-2">
        <TodoList data={todoList} />
      </main>

      <Footer />
    </>

  )
}

export default App
