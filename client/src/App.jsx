import { Link, Outlet } from "react-router-dom";
import Perguntas from "./components/perguntas";


function App() {
  return (
    <section>
      <Link to={'/'}><h1>Hello, world!</h1></Link>
      <Perguntas />
      <Outlet />
    </section>
  )
}

export default App
