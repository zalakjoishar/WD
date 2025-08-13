function displayData() {
    const fname=document.getElementById("fname").value
    const lname=document.getElementById("lname").value
    document.getElementById("prac").innerText=`Full name is ${fname} ${lname}`
}