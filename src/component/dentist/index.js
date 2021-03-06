import React,{Component} from "react";
import{CallSection,CallData,Icon,CallDesc,SpanInfo,SpanTitle,Title} from './style.js'
class Dentist extends Component{
    render(){
        return(
            <CallSection>
                <Title>Dentist</Title>
            <CallData item="1">
                
            <Icon src="images/9.png" />
            <CallDesc>
                <SpanInfo>Dr.Alshaimaa Abd El Moamen</SpanInfo>
                <SpanTitle>01156629797</SpanTitle>
            </CallDesc>
           </CallData>
           <CallData item="2">
            <Icon src="images/8.png" />
            <CallDesc>
                <SpanInfo>shaimaamoamen86@gmail.com</SpanInfo>
                <SpanTitle>Gmail</SpanTitle>
            </CallDesc>
        </CallData>
            </CallSection>
        )
    }
}
export default Dentist;