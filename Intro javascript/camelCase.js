var name=prompt("what is your name");
var firstLetter= name.slice(0,1);
firstLetter=firstLetter.toUpperCase();
var restLetters=name.slice(1,name.length);
restLetters=restLetters.toLowerCase();
alert("Hello, "+firstLetter+restLetters);






// var str=prompt("enter characters");
// // var count=str.length;
// // alert("count: "+count+ " you have "+(140-count)+" char left")
// var strUnder20=str.slice(0,20);
// alert(strUnder20);