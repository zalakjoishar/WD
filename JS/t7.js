function fetchData(callback){
    callback(5)
}
fetchData((n)=>{
    console.log(n*n)
})
setTimeout(()=>{
    console.log("hello")
},5000)
setInterval(()=>{
    console.log("Hello")
},5000)