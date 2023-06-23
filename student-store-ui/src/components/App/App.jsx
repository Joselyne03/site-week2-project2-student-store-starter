/* 
This is teh mian component that will connect all of the components through 
routes paths. T
NOTE: There are certain fucntions that have been declared but are not 
used nor functional in this current version. They are a part of the 
strectch features.
*/
import * as React from "react"
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import ProductDetail from "../ProductDetail/ProductDetail";
import About from "../About/About";

export default function App() {
  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState("close");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [shoppingCart, setShoppingCart] = useState([]);
  const [quantity,setQuantity] = useState(null);
  const [checkoutForm, setCheckoutForm] = useState([]);
  //the checkout form shoudl have the email 


  function handleOnToggle() {
    //console.log("IN HANDLE ON TOGGLE")
    if (isOpen === "close") {
      setIsOpen("open");
    } else if (isOpen === "open") {
      setIsOpen("close");
    }
    //console.log(isOpen);
    
  }

  const handleAddItemToCart = (productInfo) => {
    const id = productInfo.id;
    const originalPrice  = productInfo.price;
 
    if(shoppingCart.length === 0){
      //here I populated the shoppingcart for the first time
      setShoppingCart([{itemId: id, quantity: 1, price: originalPrice}]);
      setQuantity (1);
    }else {
      const idFound = shoppingCart.find(({ itemId }) => itemId === id);
      if(idFound === undefined){
      setShoppingCart([...shoppingCart, { itemId : id, quantity : 1 , price: originalPrice}])
      setQuantity (1);
      }else if(idFound !== undefined){
      idFound.quantity = idFound.quantity + 1;
      let newPrice = idFound.price + originalPrice;
      idFound.price =( Number(newPrice.toFixed(2)));
      setQuantity (idFound.quantity);
      }
    };
  };
  //delayed on updating the displayed section of the cart
  const handleRemoveItemToCart = (productInfo) => {
    const id = productInfo.id;
    const originalPrice  = productInfo.price;
    const idFound = shoppingCart.find(({ itemId }) => itemId === id);
    if(idFound !== undefined){
      if (idFound.quantity > 1){
        idFound.quantity -= 1;
        idFound.price = idFound.price - originalPrice;
      }else {
        let index = shoppingCart.indexOf(idFound);
        //console.log("This is the index: " + index);
        shoppingCart.splice(index,1);
      }
      setQuantity(idFound.quantity);
      

    }
  //console.log("This is the current Quantity: " + quantity);
  }
  //should be called when the input is placed with onChange
  //should change the setCheckOutForm
  const handleCheckoutFormChange = (name, value) => {
2
  }

  //Should be called when the button is clicked
  const handleOnSubmitCheckoutForm = () => {

  }

  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store`)
      .then((response => {
        setProduct(response.data.products);
      }))
      .catch((error) => {
        setError("There was an error when fetching the data from the app");
      })

  }, [])
  //console.log("This is the shoppingCart: " + shoppingCart);
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Sidebar
            isOpen={isOpen}
            handleOnToggle={handleOnToggle}
            shoppingCart={shoppingCart}
            productList={product}
          />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={product}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  shoppingCart={shoppingCart}
                  //quantity={quantity}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={<ProductDetail />}
            />
            <Route
              path="/#About"
              element={<About />}
            />
          </Routes>

        </main>
      </BrowserRouter>
    </div>
  )
} 
