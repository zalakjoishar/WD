// fetch("https://dummyjson.com/quotes").then(response=>response.json()).then(data=>{
//     data["quotes"].forEach(el => {
//         const h1=document.createElement("h1")
//         h1.appendChild(document.createTextNode(el.quote))
//         h1.setAttribute("class","bg-warning m-3 p-3")
//         document.body.appendChild(h1)
//     });
// })

fetch("https://dummyjson.com/carts")
.then(res=>res.json())
.then(data=>console.log(data["carts"][0]["products"].forEach((el)=>{
    const div=document.createElement("div")
    div.appendChild(document.createTextNode(el.title))
    div.setAttribute("class","bg-warning m-3 p-3")
    document.body.appendChild(div)
}))
)