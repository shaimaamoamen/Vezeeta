import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
export const NavbarSection=Styled.div`
padding:5px 0px;
// overflow:hidden;
background:#D3D3D3;
position:relative;
border-bottom:1px solid #000;
height:60px;
z-index:1;
margin-bottom:100px;
`
export const Logo=Styled.div`
width:20%;
float:left;
@media(max-width:991px){
    width: 100%;
    float: none;
}
`
export const Icon=styled.img`
float:left;
width:50px;
height:50px;
`

export const LogoText=Styled.h2`
transform:translate(5px,10px);
float:left;
font-size:25px;
font-weight:bold;
font-family: Wide Latin;
`

export const UlList=Styled.ul`
width:40%;
float:left;
list-style:none;
padding:0px;
@media(max-width:991px){
    width: 100%;
    float:  none;
    margin-top: 20px;
    display: none  
}
`
export const ListItem=Styled.li`
display:inline-block;
@media(max-width:991px){
    display: block;
    text-align: center;
}
`
export const Same=styled.div`

// transform:translate(800px,-50px);
cursor: pointer;
display:block;
color:#222;
text-decoration:none;
padding:10px 15px;
font-weight:bold;
&:hover{
    color:#eb5424;
`
export const Image=Styled.img`
width:25px;
transform:translate(0px,-1px)
`
export const SamePage=Styled(HashLink)`
display:block;
color:#222;
text-decoration:none;
padding:10px 15px;
font-weight:bold;
&:hover{
    color:#eb5424;
}
`

export const Page=Styled(Link)`
display:block;
color:#222;
text-decoration:none;
padding:10px 15px;
font-weight:bold;
&:hover{
    color:#eb5424;
}
`
export const Div=Styled.div`
background-color:#D3D3D3;
border:1px solid gray;
width:140px;
margin-top:15px;
position:absolute;
`
export const Li=Styled.li`
border:1px solid gray;
&:hover{
    background-color:black;
    
}
`
export const Pa=Styled(Link)`
display:block;
color:#222;
text-decoration:none;
padding:10px 15px;
font-weight:bold;
&:hover{
    color:white;
    
}
`
export const Con=Styled.div`
margin-right:70px;
`



