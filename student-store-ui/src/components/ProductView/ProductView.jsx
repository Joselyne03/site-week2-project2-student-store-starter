/* 
This is component renders the page where a single product is read with 
a unquie url from the api
*/
import * as React from "react"
import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function ProductView({product,productId,quantity,handleAddItemToCart,handleRemoveItemToCart}) {

    return (
        <div className="product-view">
            <Hero />
            <div className="product-view-card">
                <h1 className="product-id"> Product # {productId} </h1>
                <div className="card">
                    <ProductCard
                    key = {product.id}
                    product = {product}
                    productId = {product.id}
                    showDescription= {true}
                    /> 
                </div>   
            </div>  
        </div>
    )
}
