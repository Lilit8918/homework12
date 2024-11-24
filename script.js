class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    displayDetails() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.publicationYear}`;
    }
}

class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
        super(title, author, publicationYear);
        this.price = price;
    }

    displayDetails() {
        return `${super.displayDetails()}, Price: $${this.price}`;
    }
}


const book = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
console.log(book.displayDetails());

const ebook = new Ebook("Becoming", "Michelle Obama", 2018, 12.99);
console.log(ebook.displayDetails());

class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    toString() {
        return `${this.firstName} ${this.lastName}, Gender: ${this.gender}, Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, gender, age, program, year, fee) {
        super(firstName, lastName, gender, age);
        this.program = program; 
        this.year = year;
        this.fee = fee;
    }

    passExam(program, grade) {
        if (grade >= 50) {
            this.year++;
        }
    }

    toString() {
        return `${super.toString()}, Program: ${this.program.join(", ")}, Year: ${this.year}, Fee: ${this.fee}`;
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age);
        this.program = program;
        this.pay = pay;
    }

    toString() {
        return `${super.toString()}, Program: ${this.program}, Pay: ${this.pay}`;
    }
}

const student = new Student("Emma", "Brown", "Female", 22, ["Biology", "Chemistry"], 2, 3000);
student.passExam("Biology", 75);
console.log(student.toString());

const teacher = new Teacher("James", "Wilson", "Male", 40, "Physics", 45000);
console.log(teacher.toString());

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getLength() {
        return this.length;
    }

    setLength(length) {
        this.length = length;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
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

const rectangle = new Rectangle(15, 8);
console.log(rectangle.toString());
console.log("Area:", rectangle.getArea());
console.log("Perimeter:", rectangle.getPerimeter());


class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getGender() {
        return this.gender;
    }

    setEmail(email) {
        this.email = email;
    }

    toString() {
        return `Author [Name: ${this.name}, Email: ${this.email}, Gender: ${this.gender}]`;
    }
}

class BookWithAuthor {
    constructor(title, author, price, quantity) {
        this.title = title;
        this.author = author; 
        this.price = price;
        this.quantity = quantity;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    getPrice() {
        return this.price;
    }

    getQuantity() {
        return this.quantity;
    }

    setPrice(price) {
        this.price = price;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }

    getProfit() {
        return this.price * this.quantity;
    }

    toString() {
        return `Book [Title: ${this.title}, Author: ${this.author.toString()}, Price: $${this.price}, Quantity: ${this.quantity}]`;
    }
}

const author = new Author("George R.R. Martin", "george.martin@example.com", "Male");
const bookWithAuthor = new BookWithAuthor("A Game of Thrones", author, 30, 700);
console.log(author.toString());
console.log(bookWithAuthor.toString());
console.log("Profit:", bookWithAuthor.getProfit());
