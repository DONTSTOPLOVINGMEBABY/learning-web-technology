import React, {useEffect, useState} from "react";
import NavBar from "./nav-bar";
import Footer from "../footer";
import Product from "./product";
import Cart from "./cart";
import "../../style/shop.css"
import { all_games_object, all_games_list, game_prices } from "../../utils/all-game-utilities";


function ShopPage () {
    const [searchString, setSearchString] = useState("") ; 
    const [searchedObject, setSearchedObjects] = useState({...all_games_object}) ; 
    const [searchedArray, setSearchedArray] = useState([...all_games_list]) ; 
    const [cart, setCart] = useState([]) ;  

    const update_search_bar = (e) => {
        let string = e.target.value ; 
        if (searchString == "" && string.replace(/\s/g, '') == ""){return}
        setSearchString(string) ;
    }

    useEffect( () => {
        console.log("\n\n\n")
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


    return (
        <div className="shop-page">
            <NavBar 
            onChange={update_search_bar}
            searchString={searchString} 
            />
            <div className="products">
                {searchedArray.map( (key) => {
                    return (<Product 
                        id={key}
                        picture={searchedObject[key]} 
                        price={game_prices[key]}
                        key={key}/>
                    )
                })}
            </div>
            <Cart />
            <Footer /> 
        </div>
    )
}

export default ShopPage 