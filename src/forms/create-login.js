import React, { Component }from 'react';
import {Fragment} from 'react';


class CreateLogin extends Component {
 
    handleSubmit = (event) => {
        event.preventDefault()

        console.log(event.target.username.value)
        console.log(event.target.lastname.value)
        console.log(event.target.email.value)
        console.log(event.target.phone.value)
        console.log(event.target.age.value)
        console.log(event.target.pass.value)
        console.log(event.target.passcon.value)
      
      }
    

  render() {
            
    return (
        
        <Fragment>
     
          <form id = 'create' onSubmit= {this.handleSubmit}
          >
            First Name <input id="username" name="First Name" placeholder="First Name" required 
            // ref={node => (this.inputNode = node)}
            /><br/>
            Last Name <input id="lastname" type="Last Name" name="Last Name" placeholder="Last Name" required ref={node => (this.inputNode = node)}/><br/>
            E-mail Address <input id="email" type="email" placeholder="E-mail"required ref={node => (this.inputNode = node)}/><br/>
            Phone Number <input id="phone" type="tel" placeholder="Telephone Number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"required ref={node => (this.inputNode = node)}/><br/>
            Age <input id="age" type="number" placeholder="Age" min="0" max="100"required ref={node => (this.inputNode = node)}/><br/>
            Password <input id="pass" type="password" placeholder="Password" required ref={node => (this.inputNode = node)}/><br/>
            Password Confirmation <input id="passcon" type="password" placeholder="Confirm Password" required ref={node => (this.inputNode = node)}/><br/>
            <button type='submit'>Register</button>
            
        </form>
        
        
       
            </Fragment>);
  }
}




export default CreateLogin