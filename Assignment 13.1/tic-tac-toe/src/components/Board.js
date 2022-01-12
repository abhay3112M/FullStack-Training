import React from 'react';
import Cell from './Cell';

var grid = new Array(3);
    for (var i = 0; i < grid.length; i++)
        grid[i] = ['_','_','_'];

const Board=(props)=>{
    
    return (
            <div className='board'>
                <div className='cells'>
                    <Cell value="_" r={0} c={0} grid={grid}/>
                    <Cell value="_" r={0} c={1} grid={grid}/>
                    <Cell value="_" r={0} c={2} grid={grid}/>

                    <Cell value="_" r={1} c={0} grid={grid}/>
                    <Cell value="_" r={1} c={1} grid={grid}/>
                    <Cell value="_" r={1} c={2} grid={grid}/>

                    <Cell value="_" r={2} c={0} grid={grid}/>
                    <Cell value="_" r={2} c={1} grid={grid}/>
                    <Cell value="_" r={2} c={2} grid={grid}/>
              </div>
            </div>
            );
            
}


export default Board;