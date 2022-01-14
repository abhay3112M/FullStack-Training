import React from 'react';

const MovesRec = (props) => {
    var allmove=[]
    for(var i=0;i<props.move.length;i++){
        allmove.push(
            <tr>
                <td>{i+1}</td>
                <td>{props.move[i].player}</td>
                <td>[{Math.floor(props.move[i].pos/3)+1}][{props.move[i].pos%3+1}]</td>
            </tr>
        )
    }
    return(
        <div className>
            <table>
                <tr>
                    <th>Moves</th>
                    <th>Player</th>
                    <th>Position</th>
                </tr>
                {allmove}
            </table>
        </div>
    )
}

export default MovesRec;