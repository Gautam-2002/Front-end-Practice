fact(7);
function fact(n=6){ // 6 is default parameter
    var ans=1;
    for(let i=1;i<=n;i++){
        ans*=i;
    }
    console.log(ans);
    return ans;
}
function grade(n){
    if(n>70)console.log("A");
    else if(n>60 &&n<=70)console.log("B");
    else if(n===undefined)console.log("Fail");
    else console.log("C");
}

var default_ans = fact(); // calling without arguments
console.log(default_ans);
// default_ans(10);
fact(5);
fact(4);

grade();
grade(44);
grade(69);
grade(99);