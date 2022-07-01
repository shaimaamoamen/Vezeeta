import React,{Component} from "react";
import{CallSection,CallData,Icon,CallDesc,SpanInfo,SpanTitle,Title} from './style.js'
class Surgeon extends Component{
    render(){
        return(
            <CallSection>
                <Title>Surgeon</Title>
            <CallData item="1">
                
            <Icon src="images/9.png" />
            <CallDesc>
                <SpanInfo>Dr.Abd El Moamen Muhammad</SpanInfo>
                <SpanTitle>01228352639</SpanTitle>
            </CallDesc>
           </CallData>
           <CallData item="2">
            <Icon src="images/8.png" />
            <CallDesc>
                <SpanInfo>moamenmuhamed53@gmail.com</SpanInfo>
                <SpanTitle>Gmail</SpanTitle>
            </CallDesc>
        </CallData>
            </CallSection>
        )
    }
}
export default Surgeon;