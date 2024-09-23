import About from "./About"
 
import Contact from "./Contact"
import Home from "./Home"
import {  Routes,Route, Link } from "react-router-dom"
function App(){
  return(<div>
    <h1>Hello React</h1>
    
      <Link to='/'>Home</Link> |
      <Link to='/home'>Home</Link> |
      <Link to='/about'>About</Link>|
      <Link to='/contact'>Contact</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact/:id" element={<Contact/>}/>
      </Routes>
     
  </div>)
}
export default App