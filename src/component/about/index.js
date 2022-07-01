import React,{Component} from "react";
import{AboutSection,AboutData,AboutInfo,AboutTitle,AboutDesc,Image,Aboutdata} from './style.js'
class About extends Component{
    render(){
        return(
            <AboutSection>
                <div className="container">
                <AboutData>
                    <AboutInfo>
                        <AboutTitle>
                            Vezeeta
                        </AboutTitle>
                        <AboutDesc>
                            Reserving site for doctors in all specialties at
                            suitable prices and available appointments.
                        </AboutDesc>
                    </AboutInfo>
                </AboutData>
                <Aboutdata>
                    <Image  />
                </Aboutdata>
                </div>
               </AboutSection>
            
        )
    }
}
export default About;