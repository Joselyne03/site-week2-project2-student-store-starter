import React from 'react';
import "./Footer.css"

/* This component will render the about ne section inside of the home component*/

export default function Footer() {
    return (
        <div className='contents'>
            <div className='info'>
                <div className='link-column'>
                    <h4>Categories</h4>
                    <ul className='cat-list'>
                        <li className='cat'>All Category</li>
                        <li className='cat'>Clothes</li>
                        <li className='cat'>Food</li>
                        <li className='cat'>Accessories</li>
                        <li className='cat'>Tech</li>
                    </ul>
                </div>
                <div className='link-column'>
                    <h4>Social</h4>
                    <ul className='cat-list'>
                        <li className='cat'>LinkedIn</li>
                        <li className='cat'>Facebook</li>
                        <li className='cat'>Instagram</li>
                        <li className='cat'>Github</li>
                        <li className='cat'>Twitter</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}