import React from 'react';
import Status from './Status';
import Board from './Board';
import Reset from './Reset';

const Game=(props)=>{

    return (
            <div className='game'>
                <Status turn="O"/>
                <Board/>
                <Reset/>
            </div>
            
        );
            
}


export default Game;