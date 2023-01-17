class Doubly_Linked_List():
    def __init__(self):
        self.__head = None 
    
    #inserts node at the front of the list
    def prepend(self, node):
        node.__next = self.__head
        node.__prev = None
        if self.__head != None:
            self.__head.prev = node 
        self.__head = node
        
    # Inserts new node directly after existing node
    def insert(self, new_node, existing_node): 
        new_node.__next = existing_node.__next 
        new_node.__prev = existing_node
        existing_node.__next.__prev = new_node
        existing_node.__next = new_node 
    
    # Delete a node from the list
    def delete(self, node):
        update_prev = node.__prev
        update_next = node.__next 
        if (node.__prev != None):
            update_prev.__next = node.__next 
        else :
            self.__head = node.__next 
        update_next.__prev = node.__prev
        node.__next = None
        node.__prev = None
        
    # Search the list for a node and return it (if not found return false)
    def search(self, node):
        head = self.__head
        while (head != None):
            if (head.get_data() == node.get_data()):
                return head
            head = head.__next
        return False

    # Print the list starting from the front until the end is reached
    def print_list_forward(self):
        string = "null <-- " 
        head = self.__head 
        while (head != None):
            string += f'( {head.get_data()} ) --> '
            head = head.__next 
        string += "null" 
        print(string, "\n")

    # Print the list starting from the end until the front is reached
    def print_list_backward(self):
        string = "null"
        pointer = self.__head
        while (pointer.__next != None):
            pointer = pointer.__next
        while (pointer != None):
            string += f' <-- ( {pointer.get_data()} )'
            pointer = pointer.__prev 
        string += " --> null"
        print(string, "\n")


class Node():
    def __init__(self, data):
        self.__data = data 
        self.__next = None 
        self.__prev = None 

    def get_data(self):
        return self.__data 


new_list = Doubly_Linked_List() 
first_node = Node(1)
second_node = Node(2) 
third_node = Node(3)
fourth_node = Node(4)

print("Prepend second node then first node")
new_list.prepend(second_node)
new_list.prepend(first_node)
new_list.print_list_forward()

print("Insert third node after first node")
new_list.insert(third_node, first_node)
new_list.print_list_forward()

print("Insert fourth node after first node")
new_list.insert(fourth_node, first_node) 
new_list.print_list_forward()

print("Print List backwards") 
new_list.print_list_backward()

print("Delete fourth and first nodes")
new_list.delete(fourth_node)
new_list.delete(first_node)
new_list.print_list_forward()

print("Search for second node and return reference to object:")
print(new_list.search(second_node))





''' OUTPUT FROM doubly-linked-list.py

Prepend second node then first node
null <-- ( 1 ) --> ( 2 ) --> null 

Insert third node after first node
null <-- ( 1 ) --> ( 3 ) --> ( 2 ) --> null 

Insert fourth node after first node
null <-- ( 1 ) --> ( 4 ) --> ( 3 ) --> ( 2 ) --> null 

Print List backwards
null <-- ( 2 ) <-- ( 3 ) <-- ( 4 ) <-- ( 1 ) --> null 

Delete fourth and first nodes
null <-- ( 3 ) --> ( 2 ) --> null 

Search for second node and return reference to object:
<__main__.Node object at 0x000002A4A129FD60>
'''