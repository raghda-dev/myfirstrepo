'use strict';
/*this array process.argv that allows the user to enter values 
as he wants and whatever the datatype is 
using this command node total-sum.js 12 13*/

var sum =0;
/*started from 2 because indexes 0 and 1 
have the computer pathes 
and the data started to be stored from index 2*/

for (let i=2; i< process.argv.length;i++){
    /*the sum at first was like adding two strings so..*/
    var numbers = parseInt(process.argv[i]);
    sum+= numbers;
   
}
console.log(sum);