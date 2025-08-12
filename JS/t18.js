const promise=new Promise(function (resolve,reject){
    let status=true
    if (status) {
        resolve("data from resolve")
    } else {
        reject("data from reject")
    }
})
promise.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data,"Catch block");
}).finally(()=>{
    console.log("Finally block");
})