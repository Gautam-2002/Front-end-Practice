var arr1=[1,3,5,7,9];
arr1.forEach((it,index)=>{//calling func in foreach(foreach is also func)
    console.log(index+" -> "+it);
})//foreach() don't create new arr;

const arr2 = arr1.map((it)=>{
    return it>5;
})//map() returns new arr;
console.log(arr2);

const arr3 = arr1.filter((it)=>{
    return it>5;
})
console.log(arr3);

const arr4 = arr1.reduce((sum,it)=>{
    //if(it>4){
        return sum+=it;
    //}
})
console.log(arr4);

const arr5 = arr1.filter((it)=>{return it>4}).reduce((sum,it)=>{
    return sum+=it;
})

console.log(arr5);