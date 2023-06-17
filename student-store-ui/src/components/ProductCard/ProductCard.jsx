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

export default function ProductCard({product,productId,quantity,handelAddItemToCart,handelRemoveItemToCart,showDescription = false}) {
    
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
                        <button className="add">+</button>
                        <button className="remove">-</button>
                    </div>
                    <span className="quantity">
                        <span className="amount">{quantity}</span>
                    </span>

                </div>
            </div>
        </div>
    )
}