
// for (let i = 1; i < 11; i++) {
//     // setTimeout is accessing i using closure
//     setTimeout(() => {console.log(i)} , i*1000);
// }


const arr=[1,2,3,4,5,6,7,8,9,10];

for (var i=0; i<10; i++) {
    setTimeout( () => console.log(arr[i]) , 2000 ) ;   
}

for (let i=0; i<10; i++) {
    setTimeout( () => console.log(arr[i]) , 2000 ) ;   
}

