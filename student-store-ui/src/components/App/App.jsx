/* 
This is teh mian component that will connect all of the components through 
routes paths. T
NOTE: There are certain fucntions that have been declared but are not 
used nor functional in this current version. They are a part of the 
strectch features.
*/
import * as React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect,useState } from "react"
import axios from "axios"
import ProductDetail from "../ProductDetail/ProductDetail";
import About from "../About/About";

export default function App () {
  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error,setError] = useState("");
  const [shoppingCart, setShoppingCart] = useState([]);

  const handelOnToggle = (event) => {
    setIsOpen(!isOpen);
    //should change to the opposite statement
  }
  const handelAddItemToCart = (productId) => {

  }
  const handelRemoveItemToCart = (event) => {

  }
  const handelCheckoutFormChange = (name,value) => {

  }
  const handelOnSubmitCheckoutForm = () => {

  }

  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store`)
    .then((response => {
      setProduct(response.data.products);
    }))
    .catch((error) => {
      setError("There was an error");
    })
    
  },[])

  return (
    <div className="app">
      <Router>
        <main>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                products = {product} 
                handelAddItemToCart = {handelAddItemToCart} 
                handelRemoveItemToCart = {handelRemoveItemToCart} 
              />
            } 
          />
          <Route 
            path = "/products/:productId" 
            element={<ProductDetail />} 
          />
          <Route 
            path = "/#About" 
            element = {<About />}
          />
        </Routes>
        {/* <Sidebar /> */}
        </main>
      </Router>
    </div>
  )
} 
