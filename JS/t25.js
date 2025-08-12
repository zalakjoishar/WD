async function getdata() {
    return "hello"
}
console.log(getdata());

async function fetchdata() {
    let response=await fetch('https://fakestoreapi.com/products')
    let result=await response.json()
    console.log(result)
}
fetchdata()