class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = type;
    }

    fix() {
        return this.state *= 1.5;
    }

    set state(stateNew) {
        if (stateNew < 0) {
            this._state = 0;
        } else if (stateNew > 100) {
            this._state = 100;
        } else {
            this._state = stateNew;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
  type = "magazine";
    }

class Book extends PrintEditionItem {
    type = "book";
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }
}

class NovelBook extends Book {
    type = "novel";
    }

class FantasticBook extends Book {
    type = "fantastic";
    }

class DetectiveBook extends Book {
    type = "detective";
    }

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }       
    }

    findBookBy(type, value) {
        let findBook = this.books.find(book => book[type] === value);
        if (typeof findBook === 'object') {
            return findBook;
        } else {
            return null;
        } 
    }

    giveBookByName(bookName) {
    let giveBook = this.books.find(book => book.name === bookName);
        if (typeof giveBook === 'object') {
            let index = this.books.indexOf(giveBook);
            this.books.splice(index, 1);
            return giveBook;
        } else {
            return null;
        }
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }
    
    addMark(mark, subject) {
        if((mark < 2) || (mark > 5)) {
           return;
        }  
        if(!this.marks[subject]) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }

    getAverageBySubject (subject) {
        if(subject in this.marks != true) {
            return 0;
        }
        else {
            return this.marks[subject].reduce((a, b) => a + b) / this.marks[subject].length;
        }
    }

    getAverage () {
        let subjects = Object.keys(this.marks);
        if(subjects.length === 0) {
        return 0;
     }

     return subjects.reduce((a, subjects) => a + this.getAverageBySubject(subjects), 0) / subjects.length;
    }
}