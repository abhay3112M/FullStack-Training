import React from 'react';
import Status from './Status';
import ScoreBoard from './ScoreBoard';
import Info from './Info';
import Board from './Board';
import Check from './Checker';
import MovesRec from './MovesRec';


class Game extends React.Component {

    constructor(props){
        super(props);
        this.state={...this.getInitialState(),...this.getIntialScore(),...this.getInitialMovesRec()}
    }

    handleCellClick=(id)=>{
        //console.log('cell',id,'clicked');
        //never change original value directly
        //always work on a duplicate
        const cells= [...this.state.cells];
        var message="Next Move : ",next=null;
        var gameover=this.state.gameover;
        var total=this.state.total,wino=this.state.wino;
        var winx=this.state.winx,draw=this.state.draw;
        var moves = this.state.moves;

        if(cells[id]!=='_' || gameover)
            return ; //this value had  earlier.
        
        cells[id]=this.state.next;

        var result=Check(cells,id);
        if(result==='W'){
            message = 'Winner :';
            next = `'${this.state.next}'`;
            gameover=true;
            total+=1;
            if(this.state.next==='O') wino+=1;
            else winx+=1;
        }
        else if(result==='D'){
            message = 'Stalemate';
            next='';
            gameover=true;
            total+=1;
            draw+=1;
        }
        else{
            next=this.state.next==='O'?'X':'O';
        }
        moves.push({player:cells[id],pos:id});

        //update the state
        this.setState({cells,message,next,gameover,total,wino,winx,draw,moves});
        console.log('cell clicked', id);
    }

    getInitialState=(id)=>{
        return {
            cells:[  '_','_','_',
                    '_','_','_',
                    '_','_','_'
                ],
            message:'Next Move : ',
            next:'O',
            gameover:false
        }
    }

    getIntialScore=()=>{
        return { 
            total:0,
            wino:0,
            winx:0,
            draw:0,
        }
    }

    getInitialMovesRec=()=>{
        return {
            moves:[]
        }
    }


    handleReset=(id)=>{
        if(!this.state.gameover)
            return;
        this.setState(this.getInitialState());
        this.setState(this.getInitialMovesRec());
    }


    render=()=>{
        return (
            <div className='allgame'>
                <ScoreBoard total={this.state.total} wino={this.state.wino} winx={this.state.winx} draw={this.state.draw} />
                <div className='game'>
                    <Status message={this.state.message} next={this.state.next} />
                    <Board cells={this.state.cells} onCellClick={this.handleCellClick}/>
                    <button className="reset-button" onClick={this.handleReset}> Reset </button>
                </div>
                <MovesRec move={this.state.moves}/>
                
            </div>
        );           
    }

}

export default Game;
//<Info/>