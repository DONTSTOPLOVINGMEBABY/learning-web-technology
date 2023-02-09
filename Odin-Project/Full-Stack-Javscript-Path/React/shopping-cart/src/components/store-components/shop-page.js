import React, {useEffect, useState} from "react";
import NavBar from "./nav-bar";
import Footer from "../footer";
import Product from "./product";
import Cart from "./cart";
import "../../style/shop.css"
import { all_games_object, all_games_list, game_prices } from "../../utils/all-game-utilities";


function ShopPage () {
    const tax = .0600
    const [searchString, setSearchString] = useState("") ; 
    const [searchedObject, setSearchedObjects] = useState({...all_games_object}) ; 
    const [searchedArray, setSearchedArray] = useState([...all_games_list]) ; 
    const [cart, setCart] = useState([]) ;  
    const [totalPrice, setTotalPrice] = useState(0) ; 
    const [modal, setModal] = useState(false) ;
    
    const toggle_modal = () => { setModal(!modal) }

    const update_search_bar = (e) => {
        let string = e.target.value ; 
        if (searchString == "" && string.replace(/\s/g, '') == ""){return}
        setSearchString(string) ;
    }

    useEffect( () => {
        let string = searchString.toLowerCase().replace(/[\s\W_]+/g, '') ;
        let temp_object = {}, temp_array = [] ;  
        for (let i = 0 ; i < all_games_list.length ; i++){
            let compare_string = all_games_list[i].toLowerCase().replace(/[\s\W_]+/g, '') ;
            if (compare_string.includes(string)){
                temp_object[all_games_list[i]] = all_games_object[all_games_list[i]]
            }             
        }
        for (let i in temp_object){temp_array.push(i)}
        setSearchedArray([...temp_array])
    }, [searchString])

    useEffect( () =>{
        let total = 0 ; 
        for (let i = 0 ; i < cart.length ; i++){
            total += game_prices[cart[i]] ; 
        } 
        setTotalPrice(total) ; 
        console.log(total)
        console.log(cart)
    }, [cart]) ; 

    return (
        <div className="shop-page">
            <NavBar 
            onChange={update_search_bar}
            searchString={searchString} 
            toggle_modal={toggle_modal}
            cart_items={cart}
            />
            <div className="products">
                {searchedArray.map( (key) => {
                    return (<Product 
                        look_up_key={key}
                        picture={searchedObject[key]} 
                        price={game_prices[key]}
                        key={key}
                        cart={cart}
                        setCart={setCart}
                        />
                    )
                })}
            </div>
            <Cart 
            total={totalPrice}
            tax={tax}
            cart_items={cart}
            set_cart_items={setCart}
            modal={modal} 
            toggle_modal={toggle_modal}
            game_prices={game_prices}
            />
            <Footer /> 
        </div>
    )
}

export default ShopPage 