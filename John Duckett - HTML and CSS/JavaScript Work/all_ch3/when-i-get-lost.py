

def fibonnaci(up_to_this_number):
    current_num = 1 
    previous_num = 0 
    counter = 0 
    while (counter != up_to_this_number): 
        print(previous_num)
        tempv = previous_num 
        previous_num = current_num 
        current_num = tempv + current_num 
        counter += 1 
    

def recursive_fibonnaci(up_to_this_number): 

    if up_to_this_number == 0:
        return 0
    
    if up_to_this_number == 1 : 
        return 1  

    return recursive_fibonnaci(up_to_this_number - 1) + recursive_fibonnaci(up_to_this_number - 2)


def findSolution(target): 
    
    def find(current, history):
        
        if current == target:
            return history 

        elif current > target:
            return False

        else:
            return find(current + 5, history + str(5)) or find(current + 3, history + str(3))
        
    return find(1, "1")









#fibonnaci(100)
#print(recursive_fibonnaci(11))
print(findSolution)    

