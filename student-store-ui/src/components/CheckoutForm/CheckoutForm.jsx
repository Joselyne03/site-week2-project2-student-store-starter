import * as React from "react"
import "./CheckoutForm.css"
// This component is not implemented in this version of the project.
export default function CheckoutForm({isOpen,shoppingCart,CheckoutForm,handleOnCheckoutFormChange,handleOnSubmitCheckoutForm}){
    return(
        <div className = "checkout-form">
            <h3 className="header">Payment Info</h3>
            <form name="checkout-form" >
                <label className="label">Name</label>
                <div className= "control"> 
                    <input className="checkout-form-input" type="text" placeholder="Student Name"></input>
                </div>
                <label className="label">Email</label>
                <div className= "control"> 
                    <input className="checkout-form-input" type="text" placeholder="student@codepath.org"></input>
                </div>
                <div className="control"> 
                <button className="checkout-button" > Checkout </button>
                </div>
               
            </form>
        </div>
    )
}