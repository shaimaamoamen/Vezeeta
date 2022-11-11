import Styled from 'styled-components'
export const AboutSection=Styled.div`
height: 600px;
overflow: hidden; 
margin:auto;

`
export const AboutData=Styled.div`
width: 50%;
float: left;
box-sizing: border-box;
padding: 100px 0px 100px 60px;
@media (max-width:991px){
    width: 100%;
    float: none;
}
`
export const Aboutdata=Styled.div`
width: 50%;
float: left;
box-sizing: border-box;
padding: 100px 0px 100px 60px;
@media (max-width:991px){
    width: 100%;
    float: none;
}
`
export const AboutInfo=Styled.div`
width: 50%;
float: left;
animation-name: text;
animation-duration: 5s;
animation-delay: 0s;
animation-timing-function: cubic-bazier(0,0,.9,.9);
animation-iteration-count:infinite;
animation-direction: normal;
@keyframes text{
    from{
        transform:translatex(0px)
        
    }
    to{
        transform:translatex(100px) 
    }
}

@media (max-width:768px) {
    width: 100%;
    float: none;
}
`
export const AboutTitle=Styled.h1`
font-size: 40px; 
margin-bottom: 20px;
font-weight:bold;
`
export const AboutDesc=Styled.p`
font-size: 15px;
color: #888;
line-height: 1.5;
margin-bottom: 20px;
`
export const Image=Styled.div`
background-size:contain;
background-image: url(images/7.png);
background-repeat: no-repeat;
animation-name: project;
animation-duration: 5s;
animation-delay: 0s;
animation-timing-function: steps(5);
animation-iteration-count:infinite;
animation-direction: normal;
@keyframes project{
    from{
        width:0px ;
        height:0px;
        
    }
    to{
        width:600px;
        height:600px;
        
    }
}

`