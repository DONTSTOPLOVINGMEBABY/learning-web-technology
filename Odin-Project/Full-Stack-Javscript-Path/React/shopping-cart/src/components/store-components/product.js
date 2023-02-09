import React from "react";
import "../../style/product.css" 
import add_to_cart_icon from "../../assets/icons/black-add-to-cart.svg"
import add_to_cart_icon2 from "../../assets/icons/green-add-to-cart.svg"

function Product (props) {

    // some onclick function for add to cart
    // we need to pass cart and setCart to Product 

    const add_item_to_cart = () => {
        props.setCart( (previous_cart) => [...previous_cart, props.look_up_key])
    }


    return (
        <div className="product">
            <img src={props.picture} alt="picture"/> 
            <div className="price-and-cart">
                <div className="price">${props.price}</div>
                <img onClick={add_item_to_cart} id="add-to-cart-icon" src={add_to_cart_icon}/> 
            </div>
        </div>
    )
}

export default Product