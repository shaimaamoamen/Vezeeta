import React,{Component} from "react";
import Home from "./../home"
import About from "./../about"
import Contact from "./../contact"
import Footer from "./../footer"
class Index extends Component{
    render(){
        return(
            <div>
                <Home/>
                <About/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}
export default Index;


