// Object to be destrutured

const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Phone", category: "Electronics", price: 800 },
  { name: "Shoes", category: "Apparel", price: 120 }
];

// My solution

const [{name, price: firstProductPrice}, {category}, {price: thirdProductPrice}] = products;

// Another object to be destrutured

const employee = {
  id: 12345,
  firstName: "Jane",
  lastName: "Doe",
  age: 28,
  department: "Engineering",
  address: {
    street: "456 Tech Lane",
    city: "Innovate City",
    zip: "98765"
  },
  responsibilities: ["Develop", "Test", "Deploy", "Maintain"]
};

// My solution

const {firstName, lastName, age: employeeAge, department: employeeDepartment, address : {city, zip}, responsibilities: [firstResponsibility]} = employee;