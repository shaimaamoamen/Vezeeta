import React,{Component} from "react";
import Navbar from "./component/navbar"
import Index from "./component/index"
import About from "./component/about"
import Contact from "./component/contact";
import Dentist from "./component/dentist"
import Internist from "./component/internist"
import Dermatologist from "./component/dermatologist"
import Surgeon from "./component/surgeon"
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
