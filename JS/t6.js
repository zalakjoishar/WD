function fetchData(callback){
    console.log("Data fetched")
    let data="data fetched from the server"
    callback(data);
}
function processData(rdata){
    console.log("Data Processed",rdata);
}
fetchData(processData)