import Styled from 'styled-components'
export const CallSection=Styled.div`
height: auto;
overflow: hidden; 
`
export const Title=Styled.h1`
font-size: 40px; 
margin-bottom: 20px;
font-weight:bold;
`
export const CallData=Styled.div`
width: 50%;
float: left;
box-sizing: border-box;
padding: 100px 0 100px 60px;
background:${props=>props.item==="1"?'#3b5998':''};
background:${props=>props.item==="2"?'#3b5998':''};
@media (max-width:991px){
    width: 100%;
    float: none;
}
`
export const Icon=Styled.img`
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    float: left;
    margin-right: 10px;
    margin-top:10px;
`
export const CallDesc=Styled.p`
font-weight: bold;
font-size: 20px;
color: #fff;
float:left;
`
export const SpanInfo=Styled.span`
display: block;
margin-bottom: 8px;
`
export const SpanTitle=Styled.span`
font-weight: normal;
`