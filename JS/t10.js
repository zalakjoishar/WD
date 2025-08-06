let student={
    id:101,
    name:"Nisha",
    mark:80
}
console.log(student.id);
console.log(student.name);
console.log(student.mark);

console.log(student["id"]);
console.log(student["name"]);
console.log(student["mark"]);

for(let i in student){
    console.log(i,student[i]);    
}

student["id"]=102
student["school"]="svdd"
console.log(student);
