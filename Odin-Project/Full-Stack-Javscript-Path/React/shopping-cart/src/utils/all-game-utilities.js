import ac_black_flag from "../assets/game-covers/ac-black-flag.jpg"
import ac_brotherhood from "../assets/game-covers/ac-brotherhood.jpeg" 
import battle_front_2 from "../assets/game-covers/battle-front-2.jpg" 
import bf3 from "../assets/game-covers/bf3.jpg"
import cod_black_ops from "../assets/game-covers/call-of-duty-black-ops.jpg" 
import gta4 from "../assets/game-covers/gta4.jpg" 
import halo_reach from "../assets/game-covers/halo-reach.jpg" 
import lego_star_wars_complete_saga from "../assets/game-covers/lego-star-wars-complete-saga.jpg" 
import modern_warfare_2 from "../assets/game-covers/modern-warfare-2.jpg" 
import nfs_hot_pursuit from "../assets/game-covers/nfs-hot-pursuit.jpg" 
import san_andreas_gta from "../assets/game-covers/san-andreas-gta.jpg" 
import the_force_unleased from "../assets/game-covers/the-force-unleashed.jpg" 
import the_last_of_us from "../assets/game-covers/the-last-of-us.jpg" 
import uncharted_3 from "../assets/game-covers/uncharted-3.jpg" ; 

const all_games_list = [
    "Assasin's Creed Black Flag", 
    "Assassin's Creed Brotherhood",
    "Star Wars Battle Front 2", 
    "Battlefield 3", 
    "Call of Duty Black Ops", 
    "Grand Theft Auto IV", 
    "Halo Reach", 
    "Lego Star Wars Complete Saga", 
    "Call of Duty Modern Warfare 2", 
    "Need for Speed : Hot Pursuit", 
    "Grand Theft Auto San Andreas", 
    "Star Wars the Force Unleashed", 
    "The Last of Us", 
    "Uncharted 3 - Drake's Deception",  
]

const all_games_object = {
    "Assasin's Creed Black Flag" : ac_black_flag, 
    "Assassin's Creed Brotherhood": ac_brotherhood,
    "Star Wars Battle Front 2": battle_front_2, 
    "Battlefield 3": bf3, 
    "Call of Duty Black Ops": cod_black_ops, 
    "Grand Theft Auto IV" : gta4, 
    "Halo Reach" : halo_reach, 
    "Lego Star Wars Complete Saga" : lego_star_wars_complete_saga, 
    "Call of Duty Modern Warfare 2" : modern_warfare_2, 
    "Need for Speed : Hot Pursuit" : nfs_hot_pursuit, 
    "Grand Theft Auto San Andreas" : san_andreas_gta, 
    "Star Wars the Force Unleashed" : the_force_unleased, 
    "The Last of Us" : the_last_of_us, 
    "Uncharted 3 - Drake's Deception" : uncharted_3 
}

const game_prices = {
    "Assasin's Creed Black Flag" : 39.99, 
    "Assassin's Creed Brotherhood": 19.99,
    "Star Wars Battle Front 2": 2.99, 
    "Battlefield 3": 9.99, 
    "Call of Duty Black Ops": 29.99, 
    "Grand Theft Auto IV" : .99, 
    "Halo Reach" : 4.99, 
    "Lego Star Wars Complete Saga" : 4.99, 
    "Call of Duty Modern Warfare 2" : 19.99, 
    "Need for Speed : Hot Pursuit" : 7.49, 
    "Grand Theft Auto San Andreas" : 9.99, 
    "Star Wars the Force Unleashed" : 9.99, 
    "The Last of Us" : 59.99,  
    "Uncharted 3 - Drake's Deception" : 29.99
}



export {all_games_object, all_games_list, game_prices } 