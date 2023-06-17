import * as React from "react"
import "./Hero.css"

export default function Hero() {
    const imgHero = `https://p7.hiclipart.com/preview/250/506/449/hot-dog-lego-minifigures-collectable-lego.jpg`;
    return (
        <div className="hero">
            <div className="hero-container">
                <div className="intro">
                    <h1>Welcome! Find Your Merch!</h1>
                    <p>We have all kinds of goodies. 
                    Click on any of the items to start filling up your shopping cart. 
                    Checkout whenever you're ready.</p>
                </div>
                <div className="logo-container">
                    <img className="hero-img" src={imgHero} alt = "Welcome Figure" ></img>
                </div>            
            </div>   
        </div>
    )

}

