class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

  

    set state(number){
        if(number < 0){
            this._state = 0;
        }else if(number > 100){
            this._state = 100;
        }else{
            this._state = number;
        }
    }

    get state(){
        return this._state
    }

    fix(){
        this.state *= 1.5;
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}








class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let result = this.books.findIndex(e => e[type] === value);
        if(result !==-1) {
            return this.books[result];
        }else {
            return null;
        }
    }

    giveBookByName(bookName){
        let result = this.books.findIndex(e => e.name === bookName);
        if(result !==-1) {
            return this.books[result];
            this.books.splice(result, 1);
            
        }else {
            return null;
        }
    }
}


const library = new Library("Библиотека имени Ленина");

 library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);