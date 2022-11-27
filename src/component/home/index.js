import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './style.css'
import Picture3 from "./../../3.jpg"
import Picture4 from "./../../4.jpg"
import Picture5 from "./../../5.jpg"
import Picture6 from "./../../6.jpg"
export default function Home() {
  return (
   
       
    <div className='div1'  >
      
      <Carousel>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100 img1"
src={Picture3}
            alt=""
          />
          
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100 img1"
src={Picture4}
            alt=""
          />
        
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100 img1"
src={Picture5}
            alt=""
          />
         
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100 img1"
src={Picture6}
            alt=""
          />
          
        </Carousel.Item>
        </Carousel>
    </div>
   
  
  );
}