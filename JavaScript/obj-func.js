function data1(obj){
    console.log(obj.Name);
    console.log(obj.roll_no);
    console.log(obj.city);
}

var student={
    Name:"Gautam", // key:value pair
    roll_no:2010991548,
    city:"Sirsa",
    data2:function(){
        // console.log("ram");
        console.log(this);
    }
    
}
data1(student);
// console.log(student.data2());
student.data2();
var marks={
    nalr:99,
    fd:99,
    pa:99,
    percentage:function(){//method
        return (this.nalr+this.fd+this.pa)/3;
    }
}
console.log(marks.percentage);
console.log(marks.percentage());