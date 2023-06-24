import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart";

// This component is not implemented in this version of the project.
export default function Sidebar({isOpen, handleOnToggle,shoppingCart, 
  checkoutForm, handleOnCheckoutFormChange, 
  handleOnSubmitCheckoutForm,productList,submitChecker, setShoppingCart}) {
  const sidebarState = `sidebar ${isOpen}`;
  const toggleButton = `toggle-button ${isOpen}`;
  return (
    <section className = {sidebarState} >
      <div className = "wrapper">
        <button className= {toggleButton} onClick={() => handleOnToggle()}> expand </button>
        <ShoppingCart 
        isOpen={isOpen}
        shoppingCart={shoppingCart}
        productList={productList}
        handleOnCheckoutFormChange = {handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        checkoutForm = {checkoutForm}
        submitChecker={submitChecker}
        setShoppingCart = {setShoppingCart}
        />
        
      </div>

    </section>
  )
}
