import React, {useEffect, useState} from "react";
import "../../style/cart.css"

function Cart (props) {

    const [tax, setTax] = useState(.06) ; 
    const [taxTotal, setTaxTotal] = useState("")
    const [fullTotal, setFullTotal] = useState("") ; 
    const [cartEmpty, setCartEmpty] = useState(true) ; 

    useEffect( () => {
        if (props.cart_items.length > 0){setCartEmpty(true)}
        else {setCartEmpty(false)}
    }, [props.cart_items])


    useEffect( () =>{
        let hold_tax_total = props.total * tax ; 
        let hold_full_total = hold_tax_total + props.total ;   
        setTaxTotal(hold_tax_total.toFixed(2)) ;
        setFullTotal(hold_full_total.toFixed(2)) ; 
    }, [props.total])


    return (
        
        <>
        { props.modal && (
        <div className="modal">
            <div onClick={props.toggle_modal} className="overlay"></div>
            <div className="modal-content">
                <div className="your-cart-title">Your Cart</div>
                { cartEmpty ? null : <div className="no-items-in-cart">
                    You currently don't have any items in Cart
                </div> } 
                { !cartEmpty ? null : <div className="items-in-cart">
                    <div className="cart-items">
                    {props.cart_items.map( (cart_item) =>{
                        return ( 
                        <div className="cart-item">
                            {cart_item}
                        </div> ) 
                    })}
                    </div>
                    <div className="cart-prices">
                    {props.cart_items.map( (cart_item) =>{
                        return ( 
                        <div className="cart-price">
                            ${props.game_prices[cart_item]}
                        </div> ) 
                    })} 
                    </div>
                </div> } 
                <div className="calculate-total">
                    <div className="total-titles">
                        <span>Subtotal:</span > 
                        <span>Tax:</span> 
                        <span>Total:</span> 
                    </div>
                    <div className="total-prices">
                        <span>${props.total.toFixed(2)}</span>
                        <span>${taxTotal}</span>
                        <span>${fullTotal}</span>
                    </div>
                </div>
                <div className="proceed-to-checkout">
                    <button id="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>        
        </div>
        )}
    </>
    )
}

export default Cart ; 