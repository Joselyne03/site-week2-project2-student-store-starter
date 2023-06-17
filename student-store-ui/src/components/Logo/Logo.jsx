/* 
This is component is carries teh content of teh logo and also 
gives the logo a link o the home page route when clicked
*/
import * as React from "react"
import "./Logo.css"
import { Link } from "react-router-dom";

export default function Logo() {
    const image = `https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1000px-LEGO_logo.svg.png?20221012140704`
    return (
        <div className= "logo">  
            <Link to="/"><img name="lego" src={image} alt= "LEGO Logo" width="100" height="100" /></Link> 
        </div>
    )
}