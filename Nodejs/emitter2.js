const EventEmitter=require('events')
const event=new EventEmitter();
event.on('greet',()=>{
    console.log("hello Azar!!!Welcome to nodejs event")
})
event.emit('greet')