/* jshint esversion: 6 */
const os = require('os');

function isEven(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}
let freeMemory = os.freemem/(1024*1024);
console.log(`Total free Memory: ${freeMemory}`);