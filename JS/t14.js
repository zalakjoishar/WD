let obj={a:2,b:5,c:7}
let {a,b}=obj
let c=obj.a
console.log(a,b);
console.log(c);
function details({id,name}) {
    console.log(id);
    console.log(name);
}
details({id:101,name:"ABC"})
details({id:102,name:"pqr"})

let obj2=[]