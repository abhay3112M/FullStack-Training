import React from 'react';
import { withTitle } from '../hoc/with-title';
import withVisibility from '../hoc/with-visibility';

const UserRegistrationScreen = ({onRegistration}) => {
  

  //let date=new Date();
  return (

    <div className='row'>
      <div className='col col-3'>
        <img className="screenregisterimage" src="https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww=" alt="image"></img>
        </div>
        <div  className='col col-7 registration right'>
          <form>
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter Your Name" />
              </div>
              <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
              </div>
              <div class="form-group">
                <label for="exampleInputPasswordconfirm">Confirm Password</label>
                <input type="password" class="form-control" id="exampleInputPasswordconfirm" placeholder="Confirm Password" />
              </div>
              <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
    </div>

  );
}
//export default BookListScreen; 
export default
  withVisibility(
      withTitle(UserRegistrationScreen, "User Registration Screen")
  );


