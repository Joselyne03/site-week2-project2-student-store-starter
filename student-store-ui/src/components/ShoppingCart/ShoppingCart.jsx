import * as React from "react"
import { useState } from "react"
import "./ShoppingCart.css"
import CartTable from "../CartTable/CartTable"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import CheckoutSuccess from "../CheckoutSuccess/CheckoutSuccess"
// This component is not implemented in this version of the project.

export default function ShoppingCart({isOpen,shoppingCart,productList,handleOnCheckoutFormChange, 
    handleOnSubmitCheckoutForm, checkoutForm,submitChecker, setShoppingCart}) {
    let cart;

    if (isOpen === "open"){
        cart = (
            <div className = "cart-open">
                <h3 className="header">Shopping Cart</h3>
                <CartTable 
                productList={productList}
                shoppingCart={shoppingCart}
                /> 
                <CheckoutForm 
                handleOnCheckoutFormChange = {handleOnCheckoutFormChange}
                handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                checkoutForm = {checkoutForm}/>
                 <CheckoutSuccess 
                submitChecker = {submitChecker}
                shoppingCart={shoppingCart}
                checkoutForm={checkoutForm}
                productList={productList}
                setShoppingCart = {setShoppingCart}/> 
                
            </div>
        
        )
    
    }else if(isOpen === "close"){
        cart = (
            <div className="icons-close">
                <h1> icon </h1>
            </div>
        )
    }
    return (
        <div className="shopping-cart">
            {cart}
        </div>
       
    )
   
}
