import React, { Fragment } from "react";
import{ContactSection,Form,FormInput,InputText,InputEmail,InputExp,TextArea,InputSubmit}from './Style.js'
const Contact=()=>{
    return(
        <React.Fragment>
       <ContactSection>
           <div className="container">
               <Form action="">
                   <FormInput>
                       <InputText type='text' placeholder="Your Name"/>
                       <InputEmail type='email' placeholder="Your Email"/>
                   </FormInput>
                   <InputExp type='text'  placeholder="Your Subject"/>
                   <TextArea cols='30' rows='10' placeholder="Your Message"></TextArea>
                   <InputSubmit type="submit" value="Send Message"/>
               </Form>
           </div>
       </ContactSection>

       </React.Fragment>
    )
}
export default Contact;