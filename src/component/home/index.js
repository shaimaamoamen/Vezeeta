import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './style.css'
export default function Home() {
  return (
   
       
    <div className='div1'  >
      
      <Carousel>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100 img1"
src="images/3.jpg"
            alt=""
          />
          
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100 img1"
src="images/4.jpg"
            alt=""
          />
        
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100 img1"
src="images/5.jpg"
            alt=""
          />
         
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100 img1"
src="images/6.jpg"
            alt=""
          />
          
        </Carousel.Item>
        </Carousel>
    </div>
   
  
  );
}