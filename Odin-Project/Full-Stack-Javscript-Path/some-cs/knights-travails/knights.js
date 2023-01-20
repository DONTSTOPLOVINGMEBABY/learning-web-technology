// Come up with way to represent the board 
// Find a way to get all possible moves from a given point
// Develop a heuristic that scores moves that get you closer to the goal higher? 

function Node (data) {
    this.data = data; 
    this.parent ; 
}

function generate_moves(position) {
    let first = position[0] ; 
    let second = position[1] ; 
    let moves = [], return_moves = [] ; 
    moves.push([first - 2, second - 1]) ; 
    moves.push([first - 1, second - 2]) ; 
    moves.push([first + 1, second - 2]) ; 
    moves.push([first - 2, second + 1]) ; 
    moves.push([first + 1, second + 2]) ; 
    moves.push([first + 2, second + 1]) ;
    moves.push([first + 2, second - 1]) ; 
    moves.push([first - 1, second + 2]) ; 
    for (let i = 0 ; i < moves.length ; i++){
        if (moves[i][0] > -1 && moves[i][1] > - 1 && moves[i][0] < 8 && moves[i][1] < 8){
            return_moves.push(moves[i])
        }
    }
    return return_moves ; 
}

function check_goal (move, goal) {
    if(move[0] == goal[0] && move[1] == goal[1]){ return true }
    return false ; 
}




console.log(generate_moves([4, 4]))
console.log(generate_moves([0, 0]))
console.log(generate_moves([7, 7]))



/* 
    let goal_move = [x, x] ; 
    let current_move = [10, 10] ; //something that will never pass
    let all_moves = []
    while not check_goal(goal_move, current_move) {
        all_moves = generate_moves(current_node) ; 

        while (all_moves.length > 0){
            move = all_moves[0] ; 
            if (move == goal_move):
                current_move = move ; 
                break ; 
            move = move[1:]
        }
}
*/ 

function run(start_state, goal_state) { 
    let current_node = new Node(start_state) ; 
    let all_moves ; 
    let all_nodes = [current_node] ; 
    let counter = 0 ; 
    while (!check_goal(current_node.data, goal_state)){
        all_moves = generate_moves(current_node.data) ; 
        console.log("Holder")
        while (all_moves.length > 0){
            let first = all_moves.splice(0, 1) ; 
            let node = new Node(first) ; 
            node.parent = current_node ;
            all_nodes.push(node) ;  
            if (node.data == goal_state){
                current_node = node ;
                break 
            }
        }
        counter += 1 ;
        current_node = all_nodes[counter]
        console.log("Second holder")
    }
    return current_node ; 
}

let answer = run([3, 4], [4, 4]) ; 






function print_board (move) {
    console.log("\n")
    for (let i = 0 ; i < 8 ; i++){
        let string = `          ${i}  `
        for (let j = 0 ; j < 8 ; j++){
            if (move[0] == i && move[1] == j){
                string += `K  `
                continue 
            }
            string += `.  `  
        }
        
        console.log(string)
        if (i == 7) {
            string = '            '
            for (let t = 0 ; t < 8 ; t++){
                string += `${t}  `
            }
            console.log("\n", string) ; 
        } 
    }      
    console.log("\n")
}


