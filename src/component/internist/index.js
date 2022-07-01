import React,{Component} from "react";
import{CallSection,CallData,Icon,CallDesc,SpanInfo,SpanTitle,Title} from './style.js'
class Internist extends Component{
    render(){
        return(
            <CallSection>
                <Title>Internist</Title>
            <CallData item="1">
                
            <Icon src="images/9.png" />
            <CallDesc>
                <SpanInfo>Dr.Muhammad Abd El Moamen</SpanInfo>
                <SpanTitle>01206304060</SpanTitle>
            </CallDesc>
           </CallData>
           <CallData item="2">
            <Icon src="images/8.png" />
            <CallDesc>
                <SpanInfo>muhammedmoamen81@gmail.com</SpanInfo>
                <SpanTitle>Gmail</SpanTitle>
            </CallDesc>
        </CallData>
            </CallSection>
        )
    }
}
export default Internist;