// const obj={
//     name:"rahul",
//     lastName:"neha",
//     getFull:function(){
//         console.log(this.name+" "+this.lastName);
//     }
// }
// // obj.__proto__ or object.prototype
// console.log(obj.kuchbhi);
// console.log(obj.toString());

//term - prototype chaining

// arr-> Array.prototype -> object.prototype -> NULL
var arr=[1,2,3];// arr.__proto__ === Array.prototype
arr.push(0);
// console.log(arr);