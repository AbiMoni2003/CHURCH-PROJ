import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Reset from "./pages/Reset"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
