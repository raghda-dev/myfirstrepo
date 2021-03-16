/* here we can read a file called numbers.txt 
and 'utf8' is encoding to make it possible for us to read the content*/
var filesystem = require('fs');

var data = filesystem.readFileSync('numbers.txt','utf8');
var eachnumber = data.split(" ");
sum=0;
for(let i=0;i<eachnumber.length;i++){
    var numbers = parseInt(eachnumber[i]);
    sum+= numbers;
}
console.log("the numbers in the file are",data)
console.log("their total sum is",sum)
