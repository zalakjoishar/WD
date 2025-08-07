document.querySelector(".container").addEventListener("click",()=>{
    alert("container")
})

document.querySelector(".box").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("box")
})

document.querySelector("h1").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("heading")
})