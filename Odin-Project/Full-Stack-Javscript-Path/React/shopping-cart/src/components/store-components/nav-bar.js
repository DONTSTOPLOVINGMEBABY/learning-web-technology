import React from "react";
import search_icon from "../../assets/icons/search-icon.svg"
import shopping_bag from "../../assets/icons/shopping-bag.png"
import "../../style/navbar.css"

function NavBar(props) {
    return (
        <div className="navbar">
            <div className="title">
                Classic Video Game Collection
            </div>
            <div className="search-bar">
                <input 
                type="text" 
                id="search" 
                placeholder="Search Products"
                onChange={props.onChange}
                value={props.searchString}/>
                <label htmlFor="search"><img id="search-icon" src={search_icon} alt="Search Icon"/></label>
            </div>
            <div className="hold-cart-icon">
                <img id="search-icon" src={shopping_bag} alt="Shopping Bag Icon"/>
                <div className="cart-icon-text">Cart</div>
            </div>
        </div>
    )
}

export default NavBar