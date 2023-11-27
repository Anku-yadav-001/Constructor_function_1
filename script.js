function Book(title,author,genre,price)
{
        this.title=title;
        this.author=author;
        this.genre=genre;
        this.price=price
}

function Author( name,birthYear, nationality )
{
        this.name=name;
        this.birthYear=birthYear;
        this.nationality=nationality
}
Book.prototype.getBookInfo=function()
{
    console.log(`Title of book: ${this.title}`);
    console.log(`Author name: ${this.author.name}`);
    console.log(`Genre of book: ${this.genre}`);
    console.log(`Price of book: $${this.price}`);
}

let aut1=new Author("Henri Lopes",1937,"Belgian Congo")
let aut2=new Author("Stephe King",1947,"American")
let aut3=new Author("Samir Soni",1968,"Indian")
let book1=new Book("Tribaliks",aut1,"fantasy",130.434)
let book2=new Book("The Stand",aut2,"Dark fantasy",80.43)
let book3=new Book("The Experiments with Silence",aut3,"fantasy",345)

book1.getBookInfo()
console.log("")
book2.getBookInfo()
console.log("")
book3.getBookInfo()