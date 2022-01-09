const {sequelize} = require('../data/connection');

const {author,book} = sequelize.models;

const getAllAuthors = async()=>{
    console.log("reached here service");
    const authors = await author.findAll();
    return authors;
}

const addAuthor = async(author1)=>{
    const dbAuthor = await author.create(author1);
    return dbAuthor;
}

const getAuthorById = async(id)=>{
    const author1 = await author.findOne({where: {id: id}});
    if(author1)
        return author1;
    else
        throw new Error('Author Not Found');
}

const updateAuthorById = async(id,author1)=>{
    const result = await deleteAuthorById(id);
    const dbBook = await addAuthor(author1);
    return dbBook;
}

const deleteAuthorById = async(id)=>{
    const result = await author.destroy({
        where:{
            id:id
        }
    });
    if(result)
        return result;
    else
        throw new Error('Book does not exist');
}

const getBookByAuthorId = async(id)=>{
    const author1 = await author.findOne({where: {id:id}});
    const authorname = author1.name;
    const allBooksByAuthor = await book.findAll({where:{author:authorname}});
    return allBooksByAuthor;
}

module.exports = {
    getAllAuthors,
    addAuthor,
    getAuthorById,
    updateAuthorById,
    deleteAuthorById,
    getBookByAuthorId
}