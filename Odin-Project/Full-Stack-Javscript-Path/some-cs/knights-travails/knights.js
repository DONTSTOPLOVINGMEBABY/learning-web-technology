// Come up with way to represent the board 
// Find a way to get all possible moves from a given point
// Do BFS on all possible trees until node is reached 

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


function run_bfs(start_state, goal_state) { 
    let current_node = new Node(start_state) ; 
    current_node.parent = "root" ; 
    let all_moves ; 
    let all_nodes = [current_node] ; 
    let counter = 0 ; 
    while (!check_goal(current_node.data, goal_state)){
        all_moves = generate_moves(current_node.data) ; 
        while (all_moves.length > 0){
            let first = all_moves.splice(0, 1)[0] ; 
            let node = new Node(first) ; 
            node.parent = current_node ;
            all_nodes.push(node) ;  
        }
        counter += 1 ;
        current_node = all_nodes[counter] ; 
    }
    console.log(`Correct node was number ${counter} in the Queue, and ${all_nodes.length} were generated.`)
    return current_node ; 
}

function print_answer_path(node, starting_node) {
    let reverse = [], return_array = [] ; 
    while (node.parent != 'root'){
        reverse.push(node.data) ; 
        node = node.parent ; 
    }
    reverse.push(node.data)
    for (let i = reverse.length - 1; i >= 0 ; i--){
        return_array.push(reverse[i]) ; 
    }
    return return_array ; 
}

function call_bfs_and_print (start, finish) {
    let return_path = run_bfs(start, finish) ; 
    let answer = print_answer_path(return_path, start) ; 
    answer.map(print_board)
    console.log(answer) ; 
}

call_bfs_and_print([0, 0], [4, 4])


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

/* 

function run_bfs (start_state, goal_state){
    current_node = new Node(start_state) ; 
    current_node.parent = "root" ; 
    all_moves ; 
    all_nodes = [current_node] ; 
    counter = 0 ; 

    while current_node.data != goal :
        

}

*/