import React,{Component} from "react";
import{CallSection,CallData,Icon,CallDesc,SpanInfo,SpanTitle,Title} from './style.js'
class Dermatologist extends Component{
    render(){
        return(
            <CallSection>
                <Title>Dermatologist</Title>
            <CallData item="1">
                
            <Icon src="images/9.png" />
            <CallDesc>
                <SpanInfo>Dr.Ahmed Abd El Moamen</SpanInfo>
                <SpanTitle>01117917918</SpanTitle>
            </CallDesc>
           </CallData>
           <CallData item="2">
            <Icon src="images/8.png" />
            <CallDesc>
                <SpanInfo>ahmedmoamen98@gmail.com</SpanInfo>
                <SpanTitle>Gmail</SpanTitle>
            </CallDesc>
        </CallData>
            </CallSection>
        )
    }
}
export default Dermatologist;