import getHttp from './axios';

class AuthorService{

  addAuthor=async (author)=>{

    if(!author || !author.name || !author.id )
      throw new Error('Invalid Author Details');

    let axios=await getHttp();
    let response = await axios.post('/authors',author);
  }


  getAllAuthors=async()=>{
    console.log('getting data from server');
    let axios= await getHttp();
    let response= await axios.get("/authors");  // /api/authors;
    console.log('response.data',response.data);
    return response.data;
  }


  getAuthorById=async(id)=>{
    let axios=await getHttp();
    let response=await axios.get(`/authors/${id}`);
    console.log('id',response.data);
    return response.data;
  }

}

export default new AuthorService();