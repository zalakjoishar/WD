function showAlert() {
    alert("button clicked")
}

function addText(text){
    document.getElementById("Heading").textContent=text
}

const data=[]
let ispresent=false
function addFruit(){
    const value=document.getElementById("fruit").value
    const ul=document.querySelector(".list-group")
    const li=document.createElement("li")
    li.setAttribute("class","list-group-item")
    li.appendChild(document.createTextNode(value))
    ul.appendChild(li)
}

function add() {
    const num1=parseInt(document.getElementById("num1").value)
    const num2=parseInt(document.getElementById("num2").value)
    document.getElementById("answer").innerText=`${num1+num2}`
}

let im=true
function changeImage() {
    const image=document.getElementById("img")
    if (im==true) {
        image.setAttribute("src","../CSS/img.jpeg")
        im=false
    } else {
        image.setAttribute("src","../HTML/image/image.png")
        im=true
    }
}