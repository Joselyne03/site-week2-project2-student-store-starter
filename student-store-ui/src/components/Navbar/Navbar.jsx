/* 
This is component carries the navigation section and with the links
it redirects the page to a certain section of the page
*/
import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

export default function Navbar(props) {
    return (
      <nav className="navbar">
        <div className= "content">
          <div className="logo">
            <Logo />
          </div>
          <div className="links">
             <a ><Link to="/">Home </Link></a>
             <a href = "/#about">About</a>
             <a href= "/#contact-us">Contact Us</a> 
  
          </div>
       
        
        </div>
      </nav>
    )
  }
  

