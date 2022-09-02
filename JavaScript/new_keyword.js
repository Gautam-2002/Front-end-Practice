function Outer(name,last) {//constructor function
    this.name=name;
    this.last=last;
}
//new keyword create an object;
var obj1 = new Outer("Naruto","Uzumaki");
var obj2 = new Outer("Sasuke","Uchiha");

console.log(obj1);
console.log(obj2);

