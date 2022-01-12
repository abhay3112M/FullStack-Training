import React from 'react';

const Status=(props)=>{
    var turn = props.turn;
    var player = turn==="O"?1:2;
    var state = {message:`Player ${player} Turn, i.e ${turn}`}

    return (
            <div>
                Game Status<br/>
                {state.message}
            </div>
            );
            
}
export default Status;