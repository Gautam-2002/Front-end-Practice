
// const obj1 = {
//     name:"Gautam",
//     last:"Sethi",
//     getFull:function() {
//         console.log(this.name+" "+this.last);
//     }
// }
// const obj2 = {
//     name:"Monkey D.",
//     last:"Luffy"
// }
// obj1.getFull();
// obj1.getFull.call(obj2);




// call bind apply



const obj1 = {
    name:"Gautam",
    last:"Sethi"
}
const obj2 = {
    name:"Monkey D.",
    last:"Luffy"
}
function fun(){
    console.log(this.name+" "+this.last);
}
function fun1(city,state){
    console.log(this.name+" "+this.last+" "+city+" "+state);
}
fun.call(obj1);
fun.call(obj2);
fun1.apply(obj1,["sirsa","haryana"]);
fun1.apply(obj1,["Foosha","East Buue"]);
var a = fun.bind(obj1);
a();