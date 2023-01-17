# Doubly-Linked && Singly-Linked Lists for The Odin Project

## Singly-Linked in Vanilla Javascript 
The Singly-Linked List is written in Vanilla JS and implements all of the required functions as part of the "Project: Linked Lists" section of The Odin Project Curriculum. 

Methods included in JS Linked Lists:
- `prepend(node)` takes a node as input and adds it to the front of the list. 
- `append(node)` takes a node as input and adds it to the back of the list. 
- `search(node)` takes a node as input and returns true if node is found, false if not found.
- `delete(node)` takes a node as input and if found removes it from the list. Returns false if not found
- `size()` returns the number of elements in the list
- `get_head()` returns the first element of the list 
- `get_tail()` returns the last element of the list 
- `at_index(node)` searches the list for a given node and returns the index of the node in the list or returns false if the element is not found. 
- `pop()` removes the last element of the list 
- `contains(node)` takes a piece of data as input and returns true if an object in the list contains that piece of data or returns false if not such data is found. 
- `pretty_print()` prints the list in the format "(node 1) --> (node 2) ... (node n) --> null"

The `Node (data)` Object has two attributes: data and next while the `Linked_List ()` object has one attribute: head. 

## Doubly-Linked List in Python
The Doubly-Linked List is written in Python and implements the `prepend(node)`, `append(node)`, `search(node)`, and `delete(node)` methods which are identical in functionality to the ones listed above. The `Class Node` object has three attributes: `Node.next`, `Node.prev`, `Node.data`. Since we are working with a doubly Linked List, the ".prev" attribute is used to keep track of the element behind a given node. 

The Doubly-Linked List Implementation has one methood that the Singly-Linked List does not have: `print_list_backward()` which simply makes a pointer pointing to the front of the list, winds it forward down the list until it reaches the end, then rewinds it back the beginning and prints every node along the way until the beginning is reached. `print_list_forwards()` implements the same functionality as `pretty_print()` in the Singly-Linked List. 

## Differences Between Singly and Doubly Linked Lists
The main difference between these two data-structures is that the Doubly-Linked-List allows you to traverse the list in both directions, whereas the Singly-Linked-List only allows you to move in one direction towards the end of the list. In order to add bidirectional functionality to a Linked List, a single node has to keep track of the object in front of it as well as the object behind it. For this we add both a .next and .prev attribute to the Node Class. Just like we can test for the end of the list in a Singly Linked List by checking if a node's .next attribute is null, we can check to see if we have reached the beginning of the list by checking if the .prev attribute is null. This can be intuitvely seen by viewing the output from the `print_list_backward()` and `print_list_forward` methods in doubly-linked-list.py . 

##### References 
I used the Psuedocode from <em>Introduction to Algorithms</em> by <em>Cormen et al.</em> located on page 261. It can be found here ==> [Introduction to Algorithms by Cormen, Leiserson, Rivest, and Stein](https://www.amazon.com/Introduction-Algorithms-fourth-Thomas-Cormen/dp/026204630X/ref=sr_1_1?keywords=introduction+to+algorithms&qid=1673722953&sprefix=introduction+to+a%2Caps%2C123&sr=8-1) .  