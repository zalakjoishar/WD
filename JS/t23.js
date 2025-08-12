document.getElementById("myForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    let from=e.target.from.value;
    let to=e.target.to.value;
    let amount=e.target.amount.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`).then((responce)=>responce.json())
    .then((data)=>{
        console.log(data["rates"][to])
        document.getElementById("answer").innerText=`${amount} ${from} = ${amount*data["rates"][to]} ${to}`
    })
})
