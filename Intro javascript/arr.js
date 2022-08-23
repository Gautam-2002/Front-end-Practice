var arr1=[1,"abc",9.91,true,null];
console.log(arr1);
console.log(arr1[3]);
console.log(arr1.length);
// console.log(arr1[7]);
// console.log(arr1);
// console.log(arr1.length);
console.log("\n Printing Arr \n");
for(var i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
console.log("\n");
for(var it in arr1){
    console.log(it);
}
console.log("\n");
for(var it of arr1){
    console.log(it);
}