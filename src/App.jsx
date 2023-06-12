import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Landing from "./components/Landing"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:url" element={<Landing/>}/>
      </Routes>
    </>
  )
}

export default App
