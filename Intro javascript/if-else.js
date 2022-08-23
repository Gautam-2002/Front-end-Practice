var isTrue=true;

if(isTrue){
    console.log("true");
}
else{
    console.log("false");
}
if(""){
    console.log("true");
}
else{
    console.log("false");
}
if(" "){
    console.log("true");
}
else{
    console.log("false");
}

// ternary operator

isTrue?console.log("it's true"):console.log("false");
isTrue=false;
console.log(isTrue?"it's true":"it's false");