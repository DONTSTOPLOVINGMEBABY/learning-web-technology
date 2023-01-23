const prompt = require("prompt-sync")({ sigint: true });

function Ship (length) {
    this.length = length ; 
    this.name = `${length}` ; 
    this.hits = 0 ; 
    this.sunk = false ; 

    this.hit = () => {
        this.hits += 1 ; 
        this.isSunk() ; 
    }

    this.isSunk = () => { if (this.length == this.hits){this.sunk = true} }
}

function Gameboard(name=null) {
    this.board = [] ; 
    this.ships = [] ; 
    this.name = name ; 

    this.makeBoard = (() => {
        for (let i = 0 ; i < 10 ; i++){
            this.board.push([]) ; 
            for (let j = 0 ; j < 10 ; j++){this.board[i].push('-')}
        }
    })();

    this.place_ship = (length, coordinate, vertical = true) => {
        let x = coordinate[0], y = coordinate[1] ; 
        
        let ship = new Ship(length) ; 
        this.ships.push(ship) ; 
        if (vertical){
            if (length + y > 10){ 
                for (let i = 0 ; i < length ; i++){
                    this.board[y][x] = ship ; 
                    y -= 1 ;
                }
            }
            else {
                for (let i = 0 ; i < length ; i++){
                    this.board[y][x] = ship ; 
                    y += 1 ;
                }
            }
        }
        else {
            if (length + x > 10){
                for (let i = 0 ; i < length ; i++){
                    this.board[y][x] = ship ; 
                    x -= 1 ;
                }
            }
            else {
                for (let i = 0 ; i < length ; i++){
                    this.board[y][x] = ship ; 
                    x += 1 ;
                }
            }
        }
    }

    this.receiveAttack = (coordinates) => {
        let x = coordinates[0], y = coordinates[1] ; 
        let ship = this.board[y][x] ; 
        if (ship != '-' && ship != 'X'){
            ship.hit() ; 
            this.board[y][x] = 'X' ;
            return true ;  
        }
        if (ship == 'X'){
            return false
        }
        if (ship == "-"){
            this.board[y][x] = 'X' ;
            return true ;  
        } 
    }

    this.check_if_all_ships_sunk = function () {
        let sum = 0 ; 
        this.ships.forEach( (ship) => {
            sum += ship.hits 
        })
        if (sum == 17){return true} 
        else {return false}
    }

    this.pretty_print_board = function () {
        console.log("\n") ; 
        console.log(this.name) ;
        for (let i = 0 ; i < 10 ; i++){
            let string = ''
            for (let j = 0 ; j < 10 ; j++){
                if (this.board[i][j] != '-' && this.board[i][j] != 'X'){
                    string += `${this.board[i][j].name} `  
                }
                else if (this.board[i][j] == 'X'){
                    string += `X `
                }
                else {
                    string += `- `
                }
                
            }
            console.log(string) ; 
        }
        console.log("\n")
    }
}

function Player(name) {
    this.name = name ; 

    this.generate_random_play = function () {
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    }

}

let myPlayer = new Player("Henry") ; 
let computer = new Player("Computer") ; 

let myPlayer_gameboard = new Gameboard("Player") ;
let computer_gameboard = new Gameboard("Computer") ; 

computer_gameboard.place_ship(5, [3, 4], true) ; 
computer_gameboard.place_ship(2, [0, 0], false) ; 
computer_gameboard.place_ship(3, [8, 9], false) ; 
computer_gameboard.place_ship(3, [2, 3], false) ; 
computer_gameboard.place_ship(4, [7, 4], false) ; 
computer_gameboard.pretty_print_board() ; 

myPlayer_gameboard.place_ship(5, [3, 4], true) ; 
myPlayer_gameboard.place_ship(2, [0, 0], false) ; 
myPlayer_gameboard.place_ship(3, [8, 9], false) ; 
myPlayer_gameboard.place_ship(3, [2, 3], false) ; 
myPlayer_gameboard.place_ship(4, [7, 4], false) ; 
myPlayer_gameboard.pretty_print_board() ; 


console.log("Enter your move separated by commas.\nFor example: 3, 4\n")
while (!computer_gameboard.check_if_all_ships_sunk() && !myPlayer_gameboard.check_if_all_ships_sunk()){
    let x_move = prompt("x move => ") ;
    let y_move = prompt("y move => ") ;
    x_move = parseInt(x_move) ; 
    y_move = parseInt(y_move) ;
    if (!(x_move && y_move) && x_move != 0 && y_move != 0) {
        console.log("Invalid input...") ;
        continue
    }
    if (x_move < 10 && x_move >= 0 && y_move < 10 && x_move >= 0){
        let test = computer_gameboard.receiveAttack([x_move, y_move]) ;  
        if (!test){
            console.log("That position was already hit, try again") ; 
            continue ; 
        }
    }
    
    while (true){
        let move = computer.generate_random_play() ; 
        let test = myPlayer_gameboard.receiveAttack(move) ;
        if (test){break}  
    } 
    computer_gameboard.pretty_print_board() ; 
    myPlayer_gameboard.pretty_print_board() 
} 

if (computer_gameboard.check_if_all_ships_sunk()){console.log("You won!")} ; 
if (myPlayer_gameboard.check_if_all_ships_sunk()){console.log("You lost!")} ; 





//Export object for errors 
const temp_board = new Gameboard() ; 

module.exports = {
    Ship, 
    Gameboard, 
    temp_board, 
    Player
}