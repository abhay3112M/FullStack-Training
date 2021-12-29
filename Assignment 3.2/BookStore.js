function Book(Title,Author,Price,Rating){
    this.Title = Title;
    this.Author = Author;
    this.Price = Price;
    this.Rating = Rating;
}

var Book1 = new Book("Moon Story","Ram Singh",376,4.3);
var Book2 = new Book("Story of DayLight","Shreya Tripathi",234,3.0);
var Book3 = new Book("Unsolved Equations of Physics","Dr Mamon Sinha",1190,4.7);
var Book4 = new Book("Deal with your own problem","Sanjit saroj",564,2.2);
var Book5 = new Book("Get a life","Jyoti Pandit",211,5.0);

function BookManager(){

    this.AllBook = [];
    
    this.addBook = function(Book){
        this.AllBook.push(Book);
    }

    this.printBookDetails = function(Book){
        console.log("Title:- "+Book.Title);
        console.log("Author:- "+Book.Author);
        console.log("Price:- "+Book.Price);
        console.log("Rating:- "+Book.Rating);
        console.log();
    }

    this.getAllBooks = function(){
        console.log("There are total "+this.AllBook.length+" books in Book Store");
        for(var i = 0;i<this.AllBook.length;i++){
            console.log("Book "+(i+1)+" Details:-")
            this.printBookDetails(this.AllBook[i]);
        }
    }

    this.getBookByAuthor = function(Author){
        for(var book of this.AllBook){
            if(book.Author===Author)
                this.printBookDetails(book);
        }
    }

    this.getBooksInPriceRange = function(min,max){
        for(var book of this.AllBook){
            if(book.Price>=min && book.Price<=max)
                this.printBookDetails(book);
        }
    }

    this.getBooksWithRatingabove = function(rating){
        for(var book of this.AllBook){
            if(book.Price>rating)
                this.printBookDetails(book);
        }
    }
}

var BookStore = new BookManager();
BookStore.addBook(Book1);
BookStore.addBook(Book2);
BookStore.addBook(Book3);
BookStore.addBook(Book4);
BookStore.addBook(Book5);

BookStore.getAllBooks();

BookStore.getBookByAuthor("Shreya Tripathi");

BookStore.getBooksInPriceRange(100,500);

BookStore.getBooksWithRatingabove(3);



