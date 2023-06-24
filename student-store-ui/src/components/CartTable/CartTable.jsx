import * as React from "react"
import { useState } from "react"
import "./CartTable.css"
//import { useState } from "react";

export default function CartTable({shoppingCart,productList}){
//must see if the product is in the cart or not
let subtotal = 0;
shoppingCart.map((element) => {
    subtotal += element.price;

})
let taxes = ((subtotal * 8.75)/100);
let total = subtotal + taxes;
if(shoppingCart.length === 0){
    //displayShoppingTable = (
        return (<div className="notification">
        No items added to cart yet. Start shopping now!
    </div>)
    
    //)
}else if(shoppingCart !== 0){
    //here shopping cart is displayed as a personal row
    let productRow = shoppingCart.map((element,key) => (
    <div key= {element.itemId} className="product-row" >
        <span className="flex-2 product-name">{productList[element.itemId-1].name}</span>
        <span className="center product-quantity" >{element.quantity}</span>
        <span className="center product-price">${productList[element.itemId-1].price.toFixed(2)}</span>
        <span className="center product subtotal">${element.price.toFixed(2)}</span>
    </div>
    ));
        return ( 
        <div className="cartTable">
            <div className="header"> 
                <div className="header-row" >
                    <span className="flex-2">Name</span>
                    <span className="center" >Quantity</span>
                    <span className="center">Unit Price</span>
                    <span className="center">Cost</span>
                </div>
                {productRow}
            
            </div>
            <div className="reciept"> 
                <div className="reciept-subtotal">
                    <span className="label">Subtotal</span>
                    <span ></span>
                    <span ></span>
                    <span className="center-subtotal">${subtotal.toFixed(2)}</span>
                </div>
                <div className="reciept-taxes">
                <span className="label">Taxes and Fees</span>
                    <span ></span>
                    <span ></span>
                    <span className="center">${taxes.toFixed(2)}</span>
                </div>
                <div className="reciept-total">
                <span className="label">Total</span>
                    <span ></span>
                    <span ></span>
                    <span className="center-total">${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
        )
        
        
    //)
}
    
}