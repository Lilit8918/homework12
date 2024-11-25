// Book և Ebook դասեր
class Book {
    constructor(title, author, publicationYear) {
        this._title = title;
        this._author = author;
        this._publicationYear = publicationYear;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get publicationYear() {
        return this._publicationYear;
    }

    set publicationYear(value) {
        this._publicationYear = value;
    }

    displayDetails() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.publicationYear}`;
    }
}

class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
        super(title, author, publicationYear);
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    displayDetails() {
        return `${super.displayDetails()}, Price: $${this.price}`;
    }
}

// Օրինակ
const book = new Book("1984", "George Orwell", 1949);
console.log(book.displayDetails());

const ebook = new Ebook("Digital Minimalism", "Cal Newport", 2019, 10.99);
console.log(ebook.displayDetails());

// Rectangle դաս
class Rectangle {
    constructor(length, width) {
        this._length = length;
        this._width = width;
    }

    get length() {
        return this._length;
    }

    set length(value) {
        this._length = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return 2 * (this.length + this.width);
    }

    toString() {
        return `Rectangle [Length: ${this.length}, Width: ${this.width}]`;
    }
}

// Օրինակ
const rectangle = new Rectangle(10, 5);
console.log(rectangle.toString());
console.log("Area:", rectangle.getArea());
console.log("Perimeter:", rectangle.getPerimeter());
