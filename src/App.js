import React,{Component} from "react";
import Navbar from "./Component/Navbar/Index.js"
import Index from "./Component/Index/Index.js"
import About from "./Component/About/Index.js"
import Contact from "./Component/Contact/Index.js";
import Dentist from "./Component/Dentist/Index.js"
import Internist from "./Component/Internist/Index.js"
import Dermatologist from "./Component/Dermatologist/Index.js"
import Surgeon from "./Component/Surgeon/Index.js"
import {BrowserRouter,Route,Routes} from "react-router-dom"
class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="App">
        
        <Navbar/>
        <Routes>
          <Route exact path="/"  element={<Index/>}/>
          <Route path="/about"   element={<About/>}/>
          <Route path="/contact"   element={<Contact/>}/>
          <Route path="/dentist"   element={<Dentist/>}/>
          <Route path="/internist"   element={<Internist/>}/>
          <Route path="/dermatologist"   element={<Dermatologist/>}/>
          <Route path="/surgeon"   element={<Surgeon/>}/>
        </Routes>
        </div>
        </BrowserRouter>
    )
  }
}

export default App;
