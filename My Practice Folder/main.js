class Book {
  
  static totalBooks = 0;
  
  constructor(title, author, year) {
    this.title = title,
    this.author = author,
    this.year = year
    Book.totalBooks++;
  }
  
  static getTotalBooks () {
    return `There are ${Book.totalBooks} total books currently in this library`;
  }
  
}

class EBook extends Book {
  constructor(title, author, year, fileSize) {
    
    super (title, author, year);
    this.fileSize = fileSize;
  }
  
  getFileSizeWithUnit() {
    return `${this.title} is ${this.fileSize} MB`;
  }
  
}

class PrintedBook extends Book {
  constructor(title, author, year, pageCount) {
    
    super (title, author, year);
    this.pageCount = pageCount;
  }
  
  getPageCountWithUnit() {
    return `${this.title} has ${this.pageCount} pages`;
  }
  
}

const eBook1 = new EBook ('Eloquent JavaScript', 'Marijn Haverbeke', 2018, 4);
const eBook2 = new EBook ('You Don’t Know JS: Scope & Closures', 'Kyle Simpson', 2014, 2);
const eBook3 = new EBook ('JavaScript: The Definitive Guide', 'David Flanagan', 2020, 6);

const printedBook1 = new PrintedBook ('JavaScript: The Good Parts', 'Douglas Crockford', 2008, 176);
const printedBook2 = new PrintedBook ('JavaScript Patterns', 'Stoyan Stefanov', 2010, 240);
const printedBook3 = new PrintedBook ('Learning JavaScript Design Patterns', 'Addy Osmani', 2012, 254);

console.log(Book.getTotalBooks());

console.log(eBook1);
console.log(eBook1.getFileSizeWithUnit());

console.log(printedBook1);
console.log(printedBook1.getPageCountWithUnit());