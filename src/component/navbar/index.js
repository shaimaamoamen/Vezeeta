import React,{useState} from "react";
import{Link} from "react-router-dom"
import { NavbarSection,Logo,LogoText,UlList,ListItem,Same,Page,SamePage,Image,Icon,Div,Li,Pa } from "./style.js";
const Navbar=()=>{
  const[state,setstate]=useState(false);
  const Show=()=>{
    setstate(true)
  }
  const Hide=()=>{
    setstate(false)
  }
  return(
    <NavbarSection>
      <div className="container">
      <Logo>
      <Icon src="images/1.png"  width="50px" height="50px"/> 
       <LogoText>Vezeeta</LogoText>

        </Logo>  
        <UlList>
        <ListItem>
                   <Page to="/">Home</Page>
         </ListItem>
         <ListItem>
                     <SamePage to="/about">About</SamePage>
           </ListItem>
           <ListItem>
                       <SamePage to="/contact">Contact</SamePage>
             </ListItem>
             </UlList>
           
      <Same onClick={Show} onDoubleClick={Hide}>
        Reservation <Image src="images/2.png" />
        
        <div >
        {state ?(<UlList onClick={Show}>
          <Div  >
          <Li>
            <Pa to="/dentist">Dentist</Pa>
          </Li>
          <Li>
            <Pa to="/internist">Internist</Pa>
          </Li>
          <Li>
            <Pa to="/dermatologist">Dermatologist</Pa>
          </Li>
          <Li>
            <Pa to="/surgeon">Surgeon</Pa>
          </Li>
          </Div>
        </UlList>):null}
          </div>
          </Same>           
      </div>
      </NavbarSection>
    
  )
}
export default Navbar;