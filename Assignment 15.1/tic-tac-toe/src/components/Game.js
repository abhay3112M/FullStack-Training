import React from 'react';
import Status from './Status';
import Board from './Board';
import { checkGame } from '../services/TicTacToe.js'
import If from './If.js';
import MovesBoard from './MovesBoard';
import StopWatch from './StopWatch';

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();


    }

    handleCellClick = (id) => {
        console.log('cell', id, 'clicked');
        this.setState({restart: false})
        //never change original value directly
        //always work on a duplicate
        const cells = [...this.state.cells];
        // if(cells[id]!=='_')
        //     return ; //this value had  earlier.
        if (!this.state.running) {
            return
        }
        cells[id] = this.state.next;
        const newResult = checkGame(cells);
        this.setState({ result: newResult });

        if (newResult.over) {
            this.setState({ running: false });
            this.props.onGameOver(newResult); //inform app game is over.
        }

        const move = { player: this.state.next, position: id + 1 };

        const moves = [...this.state.moves, move];
        this.setState({ moves });

        const next = this.state.next === 'O' ? 'X' : 'O';


        //update the state
        this.setState({ cells, next });
        // console.log('cell clicked', id);
    }

    getInitialState = (next = '-', running = false, previousStart, restart = false) => {
        const s = {

            cells: ['_', '_', '_',
                '_', '_', '_',
                '_', '_', '_'
            ],
            previousStart: previousStart,
            next: next,
            running: running,
            restart: restart,
            moves: []  //{player:'O', position:2}

        }
        s.result = checkGame(s.cells);
        //default result {over:false, movesLeft:9, winner:null, winningSequence:null}

        return s;

    }
    handleStart = () => {
        console.log('previous start', this.state.previousStart);
        let next = this.state.previousStart === 'O' ? 'X' : 'O';
        // if(this.state.result.movesLeft === 9){
        //     this.setState(this.getInitialState(next, true, next, false));
        // }
        if (this.state.result.over) {
            this.setState(this.getInitialState(next, true, next, true));
        }
        else {
            this.setState(this.getInitialState(next, true, next, false));
        }
    }
    // drawWinner = (time, winner)=>{
    //     let O, X;
    //     if(winner){
    //         console.log("O",O)
    //         O=time
    //     }
    //     else{
    //         console.log("X",X)
    //         X=time
    //     }
    // }

    // drawWinnerX = (time)=>{
    //     X=time;
    //     console.log("x",X)
    // }

    
    render = () => {
        return (
            <div className='game'>
                {!this.state.running ? <p>Hit Start to Continue</p> : " "}
                <div className='column-layout game-header'>

                    <StopWatch label="O"
                        player={this.state.next === 'O'}
                        result={this.state.result}
                        running={this.state.running}
                        restart={this.state.restart}
                        drawWinner={this.drawWinner}
                    />
                    <Status result={this.state.result} next={this.state.next} />
                    <StopWatch label="X"
                        player={this.state.next === 'X'}
                        result={this.state.result}
                        running={this.state.running}
                        restart={this.state.restart}
                        drawWinner={this.drawWinner}
                         />

                </div>
                <div className="column-layout">
                    <Board cells={this.state.cells}
                        result={this.state.result}
                        onCellClick={this.handleCellClick} />

                    <MovesBoard moves={this.state.moves} />
                </div>
                <div>


                </div>

                <If condition={this.state.result.over || this.state.result.movesLeft === 9 && !this.state.running} >
                    <button
                        className="reset-button"
                        onClick={this.handleStart}
                    >Start</button>
                </If>



            </div>
        );

    }

}





export default Game;