document.querySelector(".box").addEventListener("click",(s)=>{
    console.log(s.target)
})

document.getElementById("myForm").addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e.target.username.value);
    console.log(e.target.age.value);
})

document.getElementById("prac").addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e.target.em.value);
    console.log(e.target.ad.value);
})