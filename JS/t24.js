function fun() {
    const n1=parseInt(document.getElementById("n1").value)
    const n2=parseInt(document.getElementById("n2").value)
    let answer=n1+n2
    document.getElementById("ans").innerText=`${n1} + ${n2} = ${answer} `
}