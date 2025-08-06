let product={
    id: 101,
    name: "Laptop",
    price: 50000,
    details:function(){
        console.log(this.id,this.name,this.price);
    },
    category:{
        categoryId:"C1",
        categoryName:"Electronics"
    }
}
product.details()
console.log(product["category"]["categoryId"]);
console.log(product["category"]["categoryName"]);
