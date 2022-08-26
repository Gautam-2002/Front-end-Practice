// function a(fun){
//     console.log("heya a");
//     fun()
// }
// // function b(){
// //     console.log("heya b");
// // }
// // a(b);//a is higher order function as fuction b is passed as parameter

// // or

// a(function b()
// {
//     console.log("hello b");
// });




var arr1 = [1,2,3,true,"Naruto","sasuke","Sakura",false];

var getString = (arr)=>{
    var res=[]
    for (let i = 0; i < arr.length; i++) {
        if(typeof(arr[i])=="string"){
            res.push(arr[i]);
        }
    }
    return res;
}
var getNumber = (arr)=>{
    var res=[]
    for (let i = 0; i < arr.length; i++) {
        if(typeof(arr[i])=="number"){
            res.push(arr[i]);
        }
    }
    return res;
}
var getBool = (arr)=>{
    var res=[]
    for (let i = 0; i < arr.length; i++) {
        if(typeof(arr[i])=="boolean"){
            res.push(arr[i]);
        }
    }
    return res;
}
var arr2 = getString(arr1);
var arr3 = getNumber(arr1);
var arr4 = getBool(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

console.log("Now using higher order : ")

function getString2(ele){
    return typeof ele==="string";
}
function getNumber2(ele){
    return typeof ele==="number";
}
function getBool2(ele){
    return typeof ele==="boolean";
}
function getMethod(arr,fun){
    let ans=[];
    for (var it of arr) {
        if (fun(it)) {
            ans.push(it);
        }
    }
    return ans;
}
var arr5 = getMethod(arr1,getNumber2);
var arr6 = getMethod(arr1,getString2);
var arr7 = getMethod(arr1,getBool2);
console.log(arr5);
console.log(arr6);
console.log(arr7);
