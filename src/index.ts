import {v4 as uuidv4} from "uuid";

type Item={
    readonly id:string,
    name:string,
    price:number,
    description:string
}

type User={
    readonly id: string,
    name: string,
    age: number,
    cart: Item[]
}

function createUser({name,age}:{name:string, age:number}){
    
    const user: User={
        name,
        age,
        id:uuidv4(),
        cart:[]
    }
    return user
}

function createItem({name, price, description}:{name:string, price:number, description:string}){
    const item:Item={
        id:uuidv4(),
        name,
        price,
        description
    }
    return item
}

function addToCart(user:User, item:Item){
    user.cart.push(item)
}

function removeFromCart(user:User, item:Item){
    user.cart = user.cart.filter((i)=>i.id !== item.id)
}

function removeQuantityFromCart(user:User, item:Item, qty:number){
    let i= 0
    while (i<qty){
        user.cart.splice(user.cart.findIndex((i)=> i.id == item.id), 1)
        i++
    }
}

function cartTotal(user:User){
    let total=0;
    for(let item of user.cart){
        total+=item.price
    }
    return total
}

function printCart(user:User){
    for(let item of user.cart){
        console.log(item.name)
    }
}

const user = createUser({name:"Jade", age:27})
const roseBoquet = createItem({name: "Rose Boquet", price: 75.99, description: "Large Boquet of Roses for celebration"})
const lilyBoquet = createItem({name:"Lily Boquet", price:70.99, description: "Hawaiian Lillies for all occasions"})
const tulipBoquet = createItem({name:"Tulip Boquet", price:40.99, description:"Vibrant and cololful display for all occasions"})


addToCart(user,roseBoquet)
printCart(user)
console.log(cartTotal(user))


addToCart(user,lilyBoquet)
addToCart(user,lilyBoquet)
printCart(user)
console.log(cartTotal(user))

addToCart(user,tulipBoquet)
addToCart(user,tulipBoquet)
addToCart(user, tulipBoquet)
printCart(user)
console.log(cartTotal(user))


removeFromCart(user,lilyBoquet)
printCart(user)

console.log(cartTotal(user), "removed lilyBoquet")

console.log(cartTotal(user))

removeQuantityFromCart(user, tulipBoquet, 2)
printCart(user)
console.log(cartTotal(user), "2 Tulips removed")