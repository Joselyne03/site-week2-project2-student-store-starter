import * as React from "react"
import "./CheckoutSuccess.css"

export default function CheckoutSuccess({submitChecker, shoppingCart, checkoutForm,productList, setShoppingCart}){
    let recieptDisplay;
    //This shoppingList will render a single list of a product
    //as it is passed through teh whole list of ShoppingCart
    let subtotal = 0;
    shoppingCart.map((element) => {
    subtotal += element.price;
    })
    let taxes = ((subtotal * 8.75)/100);
    let total = subtotal + taxes;
    const shoppingList = shoppingCart.map((item) => 
        (<li key= {item.id}>
            {item.quantity} total {productList[item.itemId-1].name} purchased at a cost of ${productList[item.itemId-1].price.toFixed(2)} for a total cost of ${item.price.toFixed(2)}.
        </li>)
    )
    
    if (submitChecker === false){
        recieptDisplay = 
        (<div className="content">
            A confirmation email will be sent to you so that you can confirm this order. 
            Once you have confirmed the order, it will be delivered to your dorm room.
            </div>)
    }else if (submitChecker === true){
        recieptDisplay = 
        (<div className="checkout-card">
            <header className="head">Reciept</header>
            <div className="body"> 
                <p className="header">Showing recipet for {checkoutForm.name} available at {checkoutForm.email}</p>
                <ul className = "purchase">
                    {shoppingList}
                    <li key= {shoppingCart.length + 1}>Before taxes the subtotal is ${subtotal.toFixed(2)}</li>
                    <li key= {shoppingCart.length + 2}>After taxes and fees were applied, the total comes out to ${total.toFixed(2)}</li>
                </ul>
            </div>
        </div>)
    }
    

    return (
        <div className="checkout-sucess">
            <h3 >Checkout Info</h3>
            {recieptDisplay}
            
        </div>
    )
}