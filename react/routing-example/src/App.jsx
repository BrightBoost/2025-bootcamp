
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from './Home'
import About from './About'
import Profile from "./Profile"
import './App.css'
import NotFound from "./NotFound"

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
