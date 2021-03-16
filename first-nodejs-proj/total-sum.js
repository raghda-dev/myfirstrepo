'use strict';
var sum =0;
for (let i=2; i< process.argv.length;i++){
    var numbers = parseInt(process.argv[i]);
    sum+= numbers;
   
}
console.log(sum);