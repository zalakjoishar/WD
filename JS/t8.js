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