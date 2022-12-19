import React,{Component} from "react";
import Home from "./../Home/Index.js"
import About from "./../About/Index.js"
import Contact from "./../Contact/Index.js"
import Footer from "./../Footer/Index.js"
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


