import * as React from "react"
import { useState } from "react"
import "./ShoppingCart.css"
import CartTable from "../CartTable/CartTable"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
// This component is not implemented in this version of the project.

export default function ShoppingCart({isOpen,shoppingCart,productList}) {
    let cart;

    if (isOpen === "open"){
        cart = (
            <div className = "cart-open">
                <h3 className="header">Shopping Cart</h3>
                <CartTable 
                isOpen={isOpen}
                productList={productList}
                shoppingCart={shoppingCart}
                /> 
                <CheckoutForm />
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
