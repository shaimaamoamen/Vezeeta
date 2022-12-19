import React,{Component} from "react";
import{CallSection,CallData,Icon,CallDesc,SpanInfo,SpanTitle,Title, Div} from './Style.js'
import Picture8 from "./../../Images/8.png"
import Picture9 from "./../../Images/9.png"
class Dentist extends Component{
    render(){
        return(
            <CallSection>
                <Title>Dentist</Title>
                <Div>
                    <h4>Reservation: from 6pm to 8pm</h4>
                    </Div>
            <CallData item="1">  
            <Icon src={Picture9}/>
            <CallDesc>
                <SpanInfo>Dr.Alshaimaa Abd El Moamen</SpanInfo>
                <SpanTitle>01156629797</SpanTitle>
            </CallDesc>
           </CallData>
           <CallData item="2">
            <Icon src={Picture8} />
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