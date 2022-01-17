import React from 'react';


const LoginScreen=()=>{
    
return(
    <div>
        <h1 className="userlogin">UserLogin</h1>
        <div className='row'>
            <div className='col col-3'>
                <img className="loginimage" src="https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww=" alt="image"></img>
            </div>

            <div className='col col-7 right'>
                <input type="email" className="form-control logininput" id="exampleFormControlInput1" placeholder="email address"/>
                <input type="email" className="form-control logininput" id="exampleFormControlInput1" placeholder="password"/>
                <button className="list-group-item list-group-item-action active roundbutton">Login</button>
            </div>
                
        </div>
    </div>
        
    )
}
export default LoginScreen;