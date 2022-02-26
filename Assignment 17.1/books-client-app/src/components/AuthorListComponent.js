import React, { useState ,useEffect}from 'react';
import AuthorService from '../services/author-service';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

const AuthorListComponent=()=>{
    console.log('reached');
    
    //TODO: Initialize Here
    const [authors, setAuthors] = useState(null);
    const [error,setError]=useState(null);

    useEffect(() => {
        AuthorService
              .getAllAuthors()
              .then(a => setAuthors(a))
              .catch(e=>setError(e.message));
    
    
      }, []);

      if(error){
        return <p>Error Fetching data:{error}. Please try later</p>;
      }

      if (!authors)
        return <Loading />;

        return (
            <div className='AuthorListScreen'>
                <div className="list-group">
                    {authors.map((author)=>(    
                       <Link key={author.id} to={`/authors/info/${author.id}`}>
                           <button className="list-group-item list-group-item-action">  
                                    {author.name}
                            </button>
                       </Link>
                    ))}
                </div>
            </div>
        );
}

export default AuthorListComponent;


