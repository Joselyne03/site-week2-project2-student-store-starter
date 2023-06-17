/* 
This is component is considered as the secodn main component that displays the
contents of the websites such as the hero,grid and infomation section
*/
import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

export default function Home({products, handelAddItemToCart,handelRemoveItemToCart}) {
  return (
    <div className="home">
      <Hero />
      <ProductGrid  
        products = {products} 
                    handelAddItemToCart = {handelAddItemToCart} 
                    handelRemoveItemToCart = {handelRemoveItemToCart} 
      />
      <div className="about" >
          <div className="about-content">
            <About />
          </div>
      </div>
      <div className="contact" >
          <div className="content">
            <Contact />
          </div>
      </div>
      <div className="Footer" >
          <div className="content">
            <Footer />
          </div>
      </div>
    </div>
  )
}

