import React,{Component} from "react";
import{CallSection,CallData,Icon,CallDesc,SpanInfo,SpanTitle,Title,Div} from './style.js'
import Picture10 from "./../../8.png"
import Picture11 from "./../../9.png"
class Internist extends Component{
    render(){
        return(
            <CallSection>
                <Title>Internist</Title>
                <Div>
                    <h4>Reservation: from 6pm to 8pm</h4>
                    </Div>
            <CallData item="1">
                
            <Icon src={Picture11} />
            <CallDesc>
                <SpanInfo>Dr.Muhammad Abd El Moamen</SpanInfo>
                <SpanTitle>01206304060</SpanTitle>
            </CallDesc>
           </CallData>
           <CallData item="2">
            <Icon src={Picture10} />
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