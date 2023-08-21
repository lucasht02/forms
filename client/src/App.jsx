import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <section>
      <Link to={'/'}><h1>Hello, world!</h1></Link>

      <Outlet />
    </section>
  )
}

export default App
