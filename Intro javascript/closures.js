// function outer(){
//     var name1 = "hello";
//     function inner(){
//         console.log(name1);
//     } 
//     inner();
// }
// outer()



function outer(){
    var name1 = "hello";
    function inner(){
        console.log(name1);
    } 
    return inner;
}
var inner = outer();// inner var stores inner + reference of variable eg. name1
inner();//this is concenpt of closure that why it can access name1 after deletion of excution context of outer();



