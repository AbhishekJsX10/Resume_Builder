import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './Components/Navbar'
import AboutUs from "./Components/AboutUs"
import Home from "./Components/Home"
import MyResumes from "./Components/MyResumes"
import Sidebar from './Components/SideBar'
import Preview from "./Components/Preview"

function App() {

  return (
    <div className='main bg-[#000000F6]'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create/:id" element={<Sidebar/>}/>
          <Route path="/myresumes" element={<MyResumes/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/preview" element={<Preview/>}/>
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
