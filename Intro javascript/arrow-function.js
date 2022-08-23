const add=(a=3,b=4)=>{
    console.log(a+b);
}
const sub=(a=7,b=5)=>console.log(a-b);
const mul=(a=4,b=1)=>a*b;
add();
add(5,8);
sub();
sub(9,4);
console.log(mul)
console.log(mul());
console.log(mul(5,7));