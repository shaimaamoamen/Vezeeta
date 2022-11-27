import React,{Component} from "react";
import{CallSection,CallData,Icon,CallDesc,SpanInfo,SpanTitle,Title,Div} from './style.js'
import Picture12 from "./../../8.png"
import Picture13 from "./../../9.png"
class Dermatologist extends Component{
    render(){
        return(
            <CallSection>
                <Title>Dermatologist</Title>
                <Div>
                    <h4>Reservation: from 6pm to 8pm</h4>
                    </Div>
            <CallData item="1">
                
            <Icon src={Picture13} />
            <CallDesc>
                <SpanInfo>Dr.Ahmed Abd El Moamen</SpanInfo>
                <SpanTitle>01117917918</SpanTitle>
            </CallDesc>
           </CallData>
           <CallData item="2">
            <Icon src={Picture12} />
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