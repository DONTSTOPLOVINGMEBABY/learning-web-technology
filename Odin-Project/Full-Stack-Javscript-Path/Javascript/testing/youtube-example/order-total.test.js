const orderTotal = require('./order-total') ; 

it('Quantity', () => {
    expect(orderTotal.orderTotal({
        items: [
            {'name': 'Dragon candy', price : 2, quantity: 3}
        ]
    })).toBe(6)
})

// Convert the rest to look like this ^^ 


if (orderTotal.orderTotal({
    items: [
        {'name': 'Dragon candy', price : 2, quantity: 3}
    ]
}) !== 6) {
    throw new Error('Check fail: Quantity')
}

if (orderTotal.orderTotal({ 
    items: [
        { name: 'Dragon food', price: 8 }, 
        { name: 'Dragon cage (small)', price: 800 }
    ]
}) !== 808){
    throw new Error('Check fail: happy path')  
}

if (orderTotal.orderTotal({ 
    items: [
        { name: 'Dragon food', price: 20 }, 
        { name: 'Dragon cage (small)', price: 40 }
    ]
}) !== 60){
    throw new Error('Check fail: happy path (example 2)')  
}