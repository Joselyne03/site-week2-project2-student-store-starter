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
import CheckoutSuccess from "../CheckoutSuccess/CheckoutSuccess";


export default function App() {
  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState("close");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [shoppingCart, setShoppingCart] = useState([]);
  const [quantity,setQuantity] = useState(null);
  const [checkoutForm, setCheckoutForm] = useState({email: "", name: ""});
  const [submitChecker,setSubmitChecker] = useState(false);
  //the checkout form shoudl have the email 


  function handleOnToggle() {
    if (isOpen === "close") {
      setIsOpen("open");
    } else if (isOpen === "open") {
      setIsOpen("close");
    }
    
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
        shoppingCart.splice(index,1);
      }
      setQuantity(idFound.quantity);
      

    }
  }
  const handleOnCheckoutFormChange = (name, event) => {
    //here prevState is used to ensure it ke
    setCheckoutForm(prevState => ({...prevState,[name] : event}))
  }

  //Should be called when the button is clicked
  const handleOnSubmitCheckoutForm = (event) => {
    event.preventDefault(); 
    setSubmitChecker(true);
  }
  useEffect(() => {
    axios.get(`http://localhost:3001/store`)
      .then((response => {
        setProduct(response.data.products);
      }))
      .catch((error) => {
        setError("There was an error when fetching the data from the app");
      })

  }, [])
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Sidebar
            isOpen={isOpen}
            handleOnToggle={handleOnToggle}
            shoppingCart={shoppingCart}
            productList={product}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            checkoutForm = {checkoutForm}
            submitChecker = {submitChecker}
            setShoppingCart = {setShoppingCart}
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
              element={<ProductDetail handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} />}
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
