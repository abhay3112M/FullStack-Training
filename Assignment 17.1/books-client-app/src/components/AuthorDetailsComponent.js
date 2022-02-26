import React,{useState,useEffect} from 'react';
import {useParams,useNavigate,Navigate} from 'react-router-dom';
import service from '../services/author-service';

const AuthorDetailsComponent = ({ props }) => {
    const params=useParams();
    const [author,setAuthor]=useState({
        name:'',
        id:'',
        photo:'',
        biography:'',
        tags:[]
    });
    const navigate=useNavigate();

    useEffect(()=>{
        service
            .getAuthorById(params.id)
            .then(setAuthor)
            .catch(error=>{
                console.log('error in getAuthorbyid',error.message);
                setAuthor(undefined);
            });

    },[params.id]);

    //if book is not found
    if(author===undefined){
        // navigate("/not-found?error=No book with given isbn&key="+params.isbn);
        // return null;
        return <Navigate to={`/not-found?error=No Author with given id&key=${params.id}`} />;
    }

    
    //if(Author===null) return <Loading title={`searching id: ${params.id}`} />
    return (
        <div className='AuthorDetailsScreen'>
            <button className="list-group-item list-group-item-action active roundbutton">New Author</button>
            <div className='row'>

                <div className='col col-7'>
                <input className="form-control" type="text" value={author.name} aria-label="Disabled input example" disabled readonly/>
                <input className="form-control" type="text" value={author.id} aria-label="Disabled input example" disabled readonly/>
                <input className="form-control" type="text" value={author.photo} aria-label="Disabled input example" disabled readonly/>
                <input className="form-control" type="text" value={author.biography} aria-label="Disabled input example" disabled readonly/>
                </div>

                <div className='col col-5'>
                    <img src={author.photo} alt={author.name}/>
                </div>

            </div>
            <div className="twobutton">
                <button className="list-group-item list-group-item-action active roundbutton">Update</button>
                <button className="list-group-item list-group-item-action active roundbutton">Cancel</button>
            </div>

        </div>
    );
}

export default AuthorDetailsComponent;