import {Component} from "react"
import {AiOutlinePlus} from "react-icons/ai"
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './index.css'; 

export default class PopUp extends Component{
    submitForm = e => (
     e.preventDefault()
    )
    render() {
        return (
           
                <Popup  //using reactjs popup to display form content when user clicks on + button
                 model 
                 trigger={<button className="bg-primary text-white button">
                 Add Data
                 <AiOutlinePlus size="25" /></button> 
                 } 
                 contentStyle={{width: "50%", height: "80%"}} 
                 className="conatiner pop-up"
                 position="bottom left"
                >
                {close => (
                <div className="">
                 <form onSubmit={this.submitForm} className="form-container">
                     <label htmlFor="first" className="label">First Name</label>
                   <input type="text" id="first" placeholder="Enter your first name" className="input" />
                   <label htmlFor="user" className="label">Username</label>
                   <input type="text" id="uder" placeholder="Enter username"  className="input"/>
                   <label htmlFor="dob" className="label">Data of birth</label>
                   <input type="date" id="dob" placeholder="Enter data of birth"  className="input"/>
                   <label htmlFor="phone" className="label">Phone Number</label>
                   <input type="text" id="phone" placeholder="Enter Phone number"  className="input"/>
                   <label htmlFor="email" className="label">Email</label>
                   <input type="text" id="email" placeholder="Enter Email"  className="input"/>
                   <label htmlFor="country" className="label">Country</label>
                   <input type="text" id="country"  placeholder="Enter Country name"  className="input"/>
                   <label htmlFor="state" className="label">State</label>
                   <input type="text" id="state" placeholder="Enter State"  className="input"/>
                   <label htmlFor="city" className="label">City</label>
                   <input type="text" id="city" placeholder="Enter City"  className="input"/>
                   <div className="buttons-container">
                   <button type="submit" className=" bg-primary text-white submit-button">Submit</button>
                   <button type="button" className=" bg-danger text-white submit-button" onClick={() => close()}>Close</button>
                   </div>
                   
                 </form>

                </div>
                )}
                </Popup>
                
         
    
        )
    }
    
} 