import React,{useState} from "react";
import{Link} from "react-router-dom"
import { NavbarSection,Logo,LogoText,UlList,ListItem,Same,Page,SamePage,Image,Icon,Div,Li,Pa,Con } from "./style.js";
import Searchbar from "./../searchbar";
import Bookdata from "./../../data.json"
import Picture1 from "./../../1.png"
import Picture2 from "./../../2.png"
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
      <Con className="container">
      <Logo>
      <Icon src={Picture1}  width="50px" height="50px"/> 
       <LogoText>Vezeeta</LogoText>

        </Logo> 
        
        <Searchbar placeholder="Enter the specialty..." data={Bookdata}/>   
 <div >
        <UlList >
        <ListItem>
                   <Page to="/">Home</Page>
         </ListItem>
         <ListItem>
                     <SamePage to="/about">About</SamePage>
           </ListItem>
           <ListItem>
                       <SamePage to="/contact">Contact</SamePage>
             </ListItem>
             <ListItem >
             <Same   onClick={Show} onMouseLeave={Hide}>
        Reservation <Image src={Picture2} />
        
        
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
        
          </Same>
          </ListItem>
             </UlList>
             </div>
           </Con>
                
    
      </NavbarSection>
    
  )
}
export default Navbar;