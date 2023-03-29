import { Route, Routes } from "react-router-dom"
import Header from "./component/Header"
import Home from "./Views/Home"
import Projects from "./Views/projects"

const App = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/projects/:id" element={<Projects />} />
      </Routes>
      
    </div>
  )
}

export default App
