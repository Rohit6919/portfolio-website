import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"


function App() {

  return (
   <div className="bg-[#0e0c1e]">
    <Navbar/>
    <Hero/>
    <About/>
    <Work/>
    <Contact/>
   </div>
  )
}

export default App
