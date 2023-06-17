import React from 'react';
import "./Contact.css"

/* This component will render the about ne section inside of the home component*/

export default function Contact() {
    return (
        <div className='contact' id = "contact-us">
            <h1 className='content-title'>Contact</h1>
            <div className='summary'>
                <ul className = "info">
                    <li className='media-list'>
                        <span className='label'>Name: </span>
                        <span>Joselyne Malan</span>
                    </li>
                    <li className='media-list'>
                        <span className='label'>email</span>
                        <span>example@example.com</span>
                    </li>
                </ul>
                <div className='media-contact'>
                    <img className= "media-img" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/4F49/production/_125879202_legorussia.png" />
                </div>
            </div>
        </div>
    )

}