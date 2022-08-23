var student={
    Name:"Gautam", // key:value pair
    roll_no:2010991548,
    city:"Sirsa",
    
}
console.log(student);
console.log(student.Name);
student.Name="Gautam Sethi";
console.log(student);
student.state="Haryana";
console.log(student);
delete student.state;
console.log(student);
var student2=student;
console.log(student2);
student2.roll_no=111;
console.log(student2);
console.log(student);

