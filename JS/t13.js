function product(id, name, price){
    this.id=id
    this.name=name
    this.price=price
}
const p1=new product(101,"P1",2500)
const p2=new product(102,"p2",3500)
console.log(p1.id);
console.log(p1.name);
console.log(p1.price);