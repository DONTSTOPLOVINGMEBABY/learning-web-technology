const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

/* 
emit is used to trigger an event
on is used to add a callback function that's going to be executed when the event is triggered
*/

eventEmitter.on( 'start', (number) => {
    console.log(`Let's hear it for the ${number} boyyyyys`)
})

eventEmitter.emit('start', 23) ; 

console.log(typeof(eventEmitter.listeners))

