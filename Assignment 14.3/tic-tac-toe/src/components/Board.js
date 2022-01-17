import React from 'react';
import Cell from './Cell';

class Board extends React.Component {

    inlist(id){
        var arr = this.props.winseq;
        if(arr===null) return false;
        return arr.includes(id);
    }
    render=()=>{

        return (
                <div className='board'>
                    <div className='cells'>
                        {this.props.cells.map((cell,index)=>(
                            <Cell value={cell} 
                                onCellClick={this.props.onCellClick} 
                                gameover={this.props.gameover}
                                winseq={this.inlist(index)}
                                winner={this.props.winner}
                                key={index}
                                id={index} />
                        ))}


                        
                       
                  </div>
                </div>
                );
                
    }  
    

}

export default Board;