/* 
This component will render the about section inside of the home component.
It will alos return the display of the about section 
*/

import React from 'react';
import "./About.css"

export default function About() {
    return (
        <div className='About-Me' id="about">
            <h1>About Me</h1>
            <div className='summary'>
                <p className='text-summary'>My name is Joselyne and this is a rendition of a shopping website by implementing
                    react and JavaScript with multiple compnenets. So far this project has been very fun!
                </p>
                <div className='media'>
                    <img className ="media-img"src="https://www.lego.com/cdn/cs/set/assets/blt742e8599eb5e8931/40649.png?fit=bounds&format=png&width=1500&height=1500&dpr=1" alt="codepath large"/>
                </div>
            </div>
        </div>
    )

}