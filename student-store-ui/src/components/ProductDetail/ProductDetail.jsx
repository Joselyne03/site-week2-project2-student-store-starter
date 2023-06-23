/* 
This is component displays the full information of a product after 
a user clicks on the image if the product
This compoent fetches the url of the single products and displays it
on aother page route
*/
import * as React from "react"
import { useEffect,useState } from "react";
import "./ProductDetail.css"
import ProductView from "../ProductView/ProductView";
import { useParams } from "react-router-dom";
import axios from "axios";

// gain the props from the App component
export default function ProductDetail({handleAddItemToCart,handleRemoveItemToCart}) {
    const [productInfo,setProductInfo] = useState(null);
    const {productId} = useParams(); //gets the id from app component
    
    useEffect(() => {
        axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
        .then((response => {
          setProductInfo(response.data.product);
          //console.log(response);
        }))
        .catch((error) => {
          setError("There was an error");
        })
        
    },[])
    if(!productInfo){
        return <div>Loading...</div>
      }
    return (
        <div className="product-detail"> 
          <div className="product-view">
              <ProductView  product = {productInfo} productId = {productInfo.id}/>
          </div>
           
        </div>
    );
};