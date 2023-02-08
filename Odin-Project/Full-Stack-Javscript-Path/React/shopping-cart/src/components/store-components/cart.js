import React, {useState} from "react";
import "../../style/cart.css"

function Cart () {

    const [modal, setModal] = useState(false) ;
    const openModal = (x) => {setModal(true)}
    const closeModal = (x) => {setModal(false)}



    return (
        <div className="modal">
            <div onClick={openModal} className="overlay"></div>
            <div className="modal-content">
                <div className="your-cart-title">Your Cart</div>
            </div>        
        </div>
    )
}

export default Cart ; 