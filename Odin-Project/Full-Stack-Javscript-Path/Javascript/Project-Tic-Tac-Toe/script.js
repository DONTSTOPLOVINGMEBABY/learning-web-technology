const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''] ; 
    let map = {
        row1col1 : 0, 
        row1col2 : 1, 
        row1col3 : 2, 
        row2col1 : 3, 
        row2col2 : 4, 
        row2col3 : 5, 
        row3col1 : 6, 
        row3col2 : 7, 
        row3col3 : 8, 
        }; 
    
    let reverse_map = [
        document.getElementById("row1col1"),  
        document.getElementById("row1col2"), 
        document.getElementById("row1col3"),  
        document.getElementById("row2col1"),   
        document.getElementById("row2col2"),   
        document.getElementById("row2col3"),   
        document.getElementById("row3col1"),  
        document.getElementById("row3col2"),  
        document.getElementById("row3col3"),   
    ]

    const winning_states = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6], 
    ];  

    
    const get_number_of_empty_positions = () => {
        let count = 0 ; 
        for (let x  of board) {
            if (x == '') {count++} 
        }
        return count; 
    }

    
    return {
        board,
        map, 
        reverse_map, 
        winning_states,
        get_number_of_empty_positions,   
    }; 
})(); 



const Player = (name, piece) => {
    const get_legal_random_move = () => {}
    return {
        name, 
        piece, 
        get_legal_random_move
    }
}



const controlGame = (() => {
    const human = Player('human', 'X'); 
    const computer = Player('computer', 'O');
    const board_elements = document.querySelectorAll('.board-element'); 
    let player1_to_move = true  ; 
    let player2_to_move = false ;

    const update_player_to_move = () => {
        player1_to_move = !player1_to_move; 
        player2_to_move = !player2_to_move;    
    }; 

    const draw_move = (element, index=0) => {
        if (element.textContent == '' && player1_to_move){ 
            element.textContent = human.piece
            gameBoard.board[gameBoard.map[element.id]] = human.piece ;
            update_player_to_move(); 
        }
        else if (player2_to_move){ 
            element.textContent = computer.piece 
            gameBoard.board[index] = computer.piece ;
            update_player_to_move();
        }
    }

    const check_for_win = () => {
    
        for (let x of gameBoard.winning_states){
            let first = x[0]; first = gameBoard.board[first]; 
            let second = x[1]; second = gameBoard.board[second]; 
            let third = x[2];  third = gameBoard.board[third]; 
            if (first == human.piece && second == human.piece && third == human.piece) {
                alert("Human won")
            }
            else if (first == computer.piece && second == computer.piece && third == computer.piece){
                alert("Computer won")
            }
        }
    }

    const make_computer_move = () => {
        let pick_number ; 

        while (true) {
            pick_number = Math.floor(Math.random() * 9)
            if (gameBoard.board[pick_number] == ''){ break }  
        }
        return pick_number;
    }

    const last_draw = (element) => {
        element.textContent = human.piece
        gameBoard.board[gameBoard.map[element.id]] = human.piece ;
    }


    const run_game = (element) => {
        if (player1_to_move) { draw_move(element) }
        check_for_win();         
        let computer_move = make_computer_move();
        if (player2_to_move){ draw_move(gameBoard.reverse_map[computer_move], computer_move)}
    }

    board_elements.forEach( (element) => {
        element.addEventListener('click', () => {
            if (player1_to_move && gameBoard.get_number_of_empty_positions() != 1) {run_game(element)}
            else {
                last_draw(element)
                check_for_win()
            }
            
        })
    })

})(); 



document.getElementById('restart-game').addEventListener('click', () => {
    location.reload(); 
})


