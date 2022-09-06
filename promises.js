const promises = new Promise((resolve,reject) =>{
    var isPrime=true;
    if (isPrime) {
        resolve("resolved")
    }
    else{
        reject("rejected")
    }
}) ;

promises.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})