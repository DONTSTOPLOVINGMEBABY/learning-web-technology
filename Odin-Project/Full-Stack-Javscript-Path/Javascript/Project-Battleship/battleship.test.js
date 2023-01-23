const ship = require("./battleship") ; 

it ("Large Y coordinate doesn't gets reversed", () =>{
    ship.temp_board.place_ship(4, [9, 1], false) ; 
    let array = ship.temp_board.board[1].slice(5, 9) ; 
    expect(array).toEqual(
        expect.objectContaining({
            length: 4
        })
    )
})

it("Large X coordinate doesn't gets reversed", () =>{
    ship.temp_board.place_ship(3, [1, 9], false) ; 
    let array = ship.temp_board.board[9].slice(1, 4) ; 
    expect(array).toEqual(
        expect.objectContaining({
            length: 3
        })
    )
})

it ("Hit function doesn't return true after hit", () => {
    ship.temp_board.place_ship(4, [9, 1], true) ;
    ship.temp_board.receiveAttack([9, 1]) ; 
    expect(ship.temp_board.board[1][9]).toBe(true)
})

it ("Player class returns the correct numbers for moves", () => {
    let player = new ship.Player("Henry") ; 
    let bool;
    if (player.generate_random_play()[0] < 10 && player.generate_random_play()[1] < 10){bool = true} 
    else {bool = false}
    expect(bool).toBe(true) ; 
})

