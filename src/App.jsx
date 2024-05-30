import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { TodoList } from "./components/TodoList"
import { todoList } from "./data"

function App() {

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
