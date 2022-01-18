import React,{useState} from 'react';
import { withTitle } from '../hoc/with-title';
import withVisibility from '../hoc/with-visibility';
import LabeledInput from '../components/LabeledInput';
import { withTimer } from '../components/Timer';

const UserLoginScreen = ({ onUserLogin}) => {
  //TODO: Initialize Here
  const [user,updateUser] = useState({
      email:'',
      password:''
  });
  
  const handleUserupdate=(id,value)=>{
    let newuser = {...user};
    newuser[id] = value;
    updateUser(newuser);
  }

  const saveUser=(e)=>{
    e.preventDefault();
    onUserLogin(user);
  }

  //let date=new Date();
  return (

    <div className='row'>
        <div className='col col-3'>
        <img className="screenimage" src="https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww=" alt="image"></img>
        </div>
        <div  className='col col-7 userlogin right'>
          <form onSubmit={saveUser}>
              <div class="form-group">
              <LabeledInput onChange={handleUserupdate} id="email" label="Email address" value={user.email}/>
                {/* <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> */}
              </div>
              <div class="form-group">
              <LabeledInput onChange={handleUserupdate} id="password" label="Password" value={user.password}/>
                {/* <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" /> */}
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>

  );
}
//export default BookListScreen; 
export default
  withVisibility(
    withTitle(UserLoginScreen, "User Login Screen")
  );


