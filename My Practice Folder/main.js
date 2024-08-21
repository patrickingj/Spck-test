class Inventory {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  // Getter to calculate total value of the inventory
  get totalValue() {
    return this.price * this.quantity;
  }
  
  // Setter to update the price with validation
  set updatePrice(newPrice) {
    if (newPrice < 0) {
      console.error('Price cannot be a negative number');
    } else {
      this.price = newPrice;
      console.log(`Price updated to ${newPrice}`);
    }
  }
  
  // Method to return product details
  getProductDetails() {
    return {
      name: this.name,
      price: this.price,
      quantity: this.quantity
    };
  }
}

// Create instances of Inventory
const product1 = new Inventory('Milo', 170, 10);
const product2 = new Inventory('Peak', 200, 15);
const product3 = new Inventory('Cowbell', 120, 5);

// Use setter to update price
product1.updatePrice = 200;

// Log total inventory value for product1
console.log(`Total Value of ${product1.name}: ${product1.totalValue}`);

// Destructure product details from product1
const { name, price, quantity } = product1.getProductDetails();
console.log(`Product Details -> Name: ${name}, Price: ${price}, Quantity: ${quantity}`);

console.log(product1.getProductDetails());