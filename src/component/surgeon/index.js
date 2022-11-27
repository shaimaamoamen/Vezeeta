import React,{Component} from "react";
import{CallSection,CallData,Icon,CallDesc,SpanInfo,SpanTitle,Title,Div} from './style.js'
import Picture14 from "./../../8.png"
import Picture15 from "./../../9.png"
class Surgeon extends Component{
    render(){
        return(
            <CallSection>
                <Title>Surgeon</Title>
                <Div>
                    <h4>Reservation: from 6pm to 8pm</h4>
                    </Div>
            <CallData item="1">
                
            <Icon src={Picture15} />
            <CallDesc>
                <SpanInfo>Dr.Abd El Moamen Muhammad</SpanInfo>
                <SpanTitle>01228352639</SpanTitle>
            </CallDesc>
           </CallData>
           <CallData item="2">
            <Icon src={Picture14} />
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