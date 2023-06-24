import * as React from "react"
import "./CheckoutForm.css"
// This component is not implemented in this version of the project.
export default function CheckoutForm({shoppingCart,checkoutForm,handleOnCheckoutFormChange,handleOnSubmitCheckoutForm}){
    return(
        <div className = "checkout-form">
            <h3 className="header">Payment Info</h3>
            <form name="checkout-form" onSubmit={(event) => handleOnSubmitCheckoutForm(event)}>
                <label className="label">Name</label>
                <div className= "control"> 
                    <input className="checkout-form-input" 
                    name = "name" type="text" 
                    placeholder="Student Name" 
                    value = {checkoutForm.name} 
                    onChange={(event) => {handleOnCheckoutFormChange(event.currentTarget.name, event.currentTarget.value)}} />

                </div>
                <label className="label">Email</label>
                <div className= "control"> 
                    <input 
                    className="checkout-form-input" 
                    name = "email" type="email" 
                    placeholder="student@codepath.org" 
                    value= {checkoutForm.email}
                    onChange={(event) => {handleOnCheckoutFormChange(event.currentTarget.name, event.currentTarget.value)}} />
                </div>
                <div className="control"> 
                <button 
                className="checkout-button" 
                type="submit"> Checkout </button>
                </div>
                
               
            </form>
        </div>
    )
}