import { v4 as uuidv4 } from "uuid";

//Items in the class & private attributes 
class Item {
  private id: string;
  private name: string;
  private price: number;
  private description: string;

  //Methods & Initializes the class attributes 
  constructor(name: string, price: number, description: string) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.description = description;
  }

  // Public Getters to access private attributes (outside class)
  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  public getDescription(): string {
    return this.description;
  }
}

 // User & private attributes
class User {
  private id: string;
  private name: string;
  private age: number;
  private cart: Item[];

  //Methods & Initalizes the class attributes
  constructor(name: string, age: number) {
    this.id = uuidv4();
    this.name = name;
    this.age = age;
    this.cart = [];
  }

  // Public Getters to access private attributes
  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getCart(): Item[] {
    return this.cart;
  }

  public addToCart(item: Item): void {
    this.cart.push(item);
  }

  public removeFromCart(item: Item): void {
    this.cart = this.cart.filter((i) => i.getId() !== item.getId());
  }

  public removeQuantityFromCart(item: Item, quantity: number): void {
    for (let i = 0; i < quantity; i++) {
      const index = this.cart.findIndex((cartItem) => cartItem.getId() === item.getId());
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
  }

  public cartTotal(): number {
    let total = 0;
    for (const item of this.cart) {
      total += item.getPrice();
    }
    return total;
  }

  public printCart(): void {
    for (const item of this.cart) {
      console.log(item.getName());
    }
  }
}

class Shop {
  private items: Item[];

  //initializes i
  constructor() {
    this.items = [];
    const roseBoquet = new Item("Rose Boquet", 75.99, "Large Boquet of Roses for celebration");
    const lilyBoquet = new Item("Lily Boquet", 70.99, "Hawaiian Lillies for all occasions");
    const tulipBoquet = new Item("Tulip Boquet", 40.99, "Vibrant and colorful display for all occasions");
    this.items.push(roseBoquet, lilyBoquet, tulipBoquet);
  }

  //Public Getter to access class attributes
  public getItems(): Item[] {
    return this.items;
  }
}

const shop = new Shop();
const user = new User("Jade", 27);

const items = shop.getItems();
const roseBoquet = items[0];
const lilyBoquet = items[1];
const tulipBoquet = items[2];

user.addToCart(roseBoquet);
user.printCart();
console.log(user.cartTotal());

user.addToCart(lilyBoquet);
user.addToCart(lilyBoquet);
user.printCart();
console.log(user.cartTotal());

user.addToCart(tulipBoquet);
user.addToCart(tulipBoquet);
user.addToCart(tulipBoquet);
user.printCart();
console.log(user.cartTotal());

user.removeFromCart(lilyBoquet);
user.printCart();
console.log(user.cartTotal(), "removed lilyBoquet");

console.log(user.cartTotal());

user.removeQuantityFromCart(tulipBoquet, 2);
user.printCart();
console.log(user.cartTotal(), "2 Tulips removed");

