import React,{useState} from 'react';
import { withTitle } from '../hoc/with-title';
import withVisibility from '../hoc/with-visibility';
import LabeledInput from '../components/LabeledInput';
import * as Validators from '../utils/validators';
import {useModel,FieldInfo} from '../utils/model';
import userService from '../services/user-service';
import {useNavigate} from 'react-router-dom';
import {eachKey} from '../utils/array-utils';

const UserRegistrationScreen = ({  }) => {
 
  const [user,handleUserChange,errors]=useModel({
    name: new FieldInfo('', Validators.required),
    email: new FieldInfo('', Validators.required,Validators.email),
    password: new FieldInfo('', Validators.required,Validators.stringLength(5,15)),
    photo:'',
    roles:['user']
  });


  const navigate=useNavigate();


  const registerUser=async(e)=>{

    e.preventDefault();//don't submit this form to server. Its a React from
    try{
        console.log('user',user);
        await userService.register(user);
        return navigate('/user/login');
    }catch(error){
        // setError(error.message);
        console.log('error',error);
    }
}

  return (

    <div className="row">

      <div className="col col-6">
        
        <form onSubmit={registerUser}>
          <LabeledInput id="name" onChange={handleUserChange} label="Name" value={user.name} error={errors?.name} />
           <LabeledInput id="email" onChange={handleUserChange} label="Email" value={user.email} error={errors?.email} />
           <LabeledInput id="password" onChange={handleUserChange} label="Password" type="password" value={user.password} error={errors?.password}/>
           <LabeledInput id="photo" onChange={handleUserChange} label="Photo URL" value={user.photo} error={errors?.photo} />
           <button disabled={errors} type='submit' className='btn btn-primary' >Register</button>
        </form>
        </div>
        <div className="col col-6">
          <img src='/images/book-door.jpeg' alt='login image' className="login-image"/>
        </div>
    </div>

  );
}
//export default BookListScreen; 
export default
  withVisibility(
    withTitle(UserRegistrationScreen, "User Registration")
  );


