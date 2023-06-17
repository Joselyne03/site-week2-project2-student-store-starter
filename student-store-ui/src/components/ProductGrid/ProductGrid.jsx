/* 
This is component displays the list of the product from the api
Multiple event handelers can be added to this component as a 
way to filiter teh list of product based on the users input
in the searchbar.
It also filiters the list of product whenever the user clicks
on one of the categories
This components uses filiter and maps to render a particular list of products
*/
import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"
import { useState } from "react";

export default function ProductGrid({products,handelAddItemToCart,handelRemoveItemToCart}){
    const [searchedItem,setSearchedItem] = useState("");
    const [filterProducts,setFilteredProducts] = useState(products);
    const [category,setCategory] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        if(event.target.value === " "){
            setFilteredProducts(products);
        }else{
            setSearchedItem(event.target.value);
            setFilteredProducts(
                filterProducts.filter((products) => 
                    products.name.toLowerCase().includes(event.target.value.toLowerCase())

                )
            );
        }
    };
    const handelCategory = (categoryName) => {
        setCategory(categoryName);
        if(categoryName === "All-Categories"){
            setFilteredProducts(products);
        }else {
            setFilteredProducts(
                products.filter((products) => 
                products.category.toLowerCase().includes(categoryName.toLowerCase())
                )
            );
        }
    }
    const number = 1;
    let listOfProducts =  filterProducts.map((product) => (
        <div className="grid-card"> 
            <ProductCard 
                key = {product.id}
                product = {product}
                quantity = {number}
                showDescription= {false}
                /> 
        </div>
            
    ));
    if(listOfProducts == []){
        listOfProducts = 
            <div className = "no-products">
                <h2>No Products Found</h2>
            </div>
        
    }
      

    return(
        <div className="main-conatiner">
            <nav className='subNavbar'>
                <div className="subBar-content">
                    <div className='row'>
                        <input 
                        className="searchBar"
                        type="text" 
                        value={searchedItem}
                        onChange={handleSearch}
                        placeholder="Search item here..."
                        />
                    </div>
                    <div className='row'>
                        <div className='content-menu'>
                            <ul className='category-menu'>
                                <li><button type="button" className='menu-category'onClick={() => handelCategory('All-Categories')}>All Categories</button></li>
                                <li><button type="button" className='menu-category' onClick={() => handelCategory('clothing')} >Clothing</button></li>
                                <li><button type="button" className='menu-category' onClick={() => handelCategory('food')}>Food</button></li>
                                <li><button type="button" className='menu-category' onClick={() => handelCategory('accessories')}>Accessories</button></li>
                                <li><button type="button" className='menu-category' onClick={() => handelCategory('tech')}>Tech</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav> 
            <h1>Best Selling Products</h1>
            <br />
            <div className="product-grid"> 
            <div className="content" >
                {listOfProducts}
            </div>
         </div>
        </div>
    )

}
