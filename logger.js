/* jshint esversion:6 */
const EventEmitter = require('events');
var url='https://www.rajlee.com';
class Logger extends EventEmitter{
     log(message){
        console.log(message);
    
        this.emit('messageLogged', {id:1, url:"https://www.rajlee.com"});
    
    
    }
}

module.exports = Logger;