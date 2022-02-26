const {sequelize} = require('./connection.js');
const authors = require('./authors.json');
const books = require('./books.json');

const r=(array)=>{
    let index=Math.floor( Math.random()*array.length);
    return array[index];
}

const createReview=(bookTitle)=>{

    const fname=["Aman","Syed","Arnav","Abhay","Vivek","Arpit","Mansi"];
    const lname=["Singh","Varma","John","Kumar","Thakur"];
    let titles=["Great Book","Boring Book","Must Read","Time Pass","Looks Great","Interesting"];
    let title=r(titles);
    return {
        reviewer:`${r(fname)} ${r(lname)}`,
        rating: Math.floor(Math.random()*11)*0.5,
        title: title,
        review:`${bookTitle} is ${title}`
    }
}


module.exports={

    seedData: async()=>{
        console.log('seeding...');
        const {Book,User,Author,Review}=sequelize.models;

        for (let author of authors) {
          let dbAuthor = await Author.create(author);
        }



        for(let book of books){
           
            let dbBook=await Book.create(book);

            for(let i=0;i<5;i++){
                let review= await Review.create(createReview(book.title));
                //update to include bookIsbn in review
                await dbBook.addReview(review); //add this review to the current book
            }
            
        }

        await User.create({
            email:'vivek@conceptarchitect.in',
            name:'Vivek Dutta Mishra',
            password:'p@ss#1',
            photo:'https://randomuser.me/api/portraits/med/men/40.jpg',
            roles:['admin','manager']
        }); 
 
        await User.create({
            email:'shivanshi@gmail.com',
            name:'Shivanshi Mishra', 
            password:'p@ss#1',
            photos:'https://randomuser.me/api/portraits/med/women/18.jpg',
            roles:['customer','editor']
        });
    }
};