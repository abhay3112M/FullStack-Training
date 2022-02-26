import React from 'react';

import { Timer } from '../components/Timer';

const HomeScreen=({})=>{
    //TODO: Initialize Here
    return (
        <div className='text-center'>
            
            <h1 className ='BookHome' >Book's Home</h1>
            <div className='timer'>
                <Timer className='timer'/>
            </div>
            
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqh0r_z7pt1QPZofNhEkgRm1SkfppHD6mDw&usqp=CAU" className="img-fluid" alt="bookImg"></img>
            </div>

            <div className='quote'>
                <p>Many people, myself among them, feel better at the mere sight of a book.
                        -Jane Smiley
                </p>
            </div>
        </div>
        // <div className='HomeScreen'>
        //     <h1>Home</h1>
        // </div>
    );
}

export default HomeScreen;