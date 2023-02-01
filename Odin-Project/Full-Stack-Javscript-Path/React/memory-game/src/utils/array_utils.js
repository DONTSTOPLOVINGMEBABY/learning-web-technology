// Takes an array and searches for the value in said array.

function found (array, value) {
    for (let i = 0 ; i < array.length ; i++){
        if (array[i] == value){return true}
    }
    return false
}

// Takes existing array and shuffles items inside of it
const shuffleArray = array => {
    return [...array].sort(() => Math.random() - 0.5)
} 

const return_x_shuffled_elements = (initial_array, num_elements) => {
    let return_array = [] ; 
    for (let i = 0 ; i < num_elements ; i++){
        return_array[i] = initial_array[i] ; 
    }
    return shuffleArray(return_array)
}


export {found, shuffleArray, return_x_shuffled_elements}