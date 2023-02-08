import React from "react";
import "../../style/product.css" 
import add_to_cart_icon from "../../assets/icons/black-add-to-cart.svg"
import add_to_cart_icon2 from "../../assets/icons/green-add-to-cart.svg"

function Product (props) {
    return (
        <div className="product" id={props.id}>
            <img src={props.picture} alt="picture"/> 
            <div className="price-and-cart">
                <div className="price">${props.price}</div>
                <img id="add-to-cart-icon" src={add_to_cart_icon}/> 
            </div>
        </div>
    )
}

export default Product