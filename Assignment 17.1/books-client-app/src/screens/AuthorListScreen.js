import React from 'react';
import AuthorListComponent from '../components/AuthorListComponent';
import AuthorDetailsComponent from '../components/AuthorDetailsComponent';


const AuthorListInfoScreen =()=>{

        return (
            <div className='AuthorListInfoScreen'>
                <h1>Author Manager</h1>
  
                <div className='row'>
  
                    <div className='col col-3'>
                        <AuthorListComponent />
                    </div>
  
                    {/* <div className='col col-9'>
                        <AuthorDetailsComponent/>
                    </div> */}
  
                </div>
            </div>
        );
}

export default AuthorListInfoScreen;