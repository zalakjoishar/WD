const arr=[12,"a","B",true]
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[5])
for(let i of arr){
    console.log(i)
}
for(let i in arr){
    console.log(i)
}
arr[10]=56
console.log(arr)
console.log(arr.length)

let num=[11,23,56,90,22]
num.forEach((n,i,arr)=>{
    console.log(n,i,arr);
})
num.forEach((n)=>{
    console.log(n*n);
})

const ar=num.filter((n)=>n>50)
console.log(ar);

let student=[
    {id:101,age:19},
    {id:102,age:20},
    {id:103,age:16}
]
console.log(student.filter(s=>s.age>18));

console.log(num.map((n)=>n+1))

console.log(num.sort((a,b)=>b-a));

let arr1=[12,45,10]
let arr2=[23,78,90]
let arr3=[...arr1,...arr2]
console.log(arr3);

let alphbet=["A","B","C","D","E"]
let [a,...b]=alphbet
console.log(a,b);

function add(b,...a){
    return a
}
console.log(add(12,56,5));
