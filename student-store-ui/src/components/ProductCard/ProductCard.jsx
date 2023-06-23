/* 
This compoment builds a single card of a product onto the grid.
It renders a the information of a single product from the api
The image is also linked to a page that renders the information of 
the product
*/
import * as React from "react"
import "./ProductCard.css"
import ProductDetail from "../ProductDetail/ProductDetail"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function ProductCard({product,handleAddItemToCart,handleRemoveItemToCart,showDescription = false,shoppingCart}) {
    let quantityDisplay = (<div> Nothing </div>)
    if (Array.isArray(shoppingCart)){
        //console.log(product);
        const item = shoppingCart.find((item) => item.itemId === product.id);
        item ? quantityDisplay = item.quantity : quantityDisplay = 0
        // console.log("This is the item in Shopping cart: " + item.quantity);
        //quantity = item.quantity;
        
        // if (quantity !== 0){
        //     quantityDisplay = (<span className="amount">{quantity}</span>)

    }
    //console.log(shoppingCart);
    return (
        <div className="product-card"> 
            <div className="media">
                 <Link to = {`/products/${product.id}`}> 
                    <img className ="productImage" 
                    src = {product.image} 
                    alt = "${product.name} 's image" 
                    />
                 </Link>
            </div>
            <br/>
            <div className="productInfo">
                <div className="main-info">
                    <h1 className="product-name">{product.name}</h1>
                    <h3 className="product-price">${product.price.toFixed(2)}</h3>
                    {(showDescription && <p>{product.description}</p>)}
                </div>
                <div className="actions">
                    <div className="buttons">
                        <button className="add" onClick={() => {handleAddItemToCart(product)}}>+</button>
                        <button className="remove" onClick={() => {handleRemoveItemToCart(product)}}>-</button>
                    </div>
                   
                    <span className="quantity">
                        {quantityDisplay}
                    </span> 

                </div>
            </div>
        </div>
    )
}