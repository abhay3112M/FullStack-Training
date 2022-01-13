import React from 'react';

const ScoreBoard=(props)=>{
    return (
        <div className='Sboard'>
            <h2 className='h2tag'>Score Board</h2>
            <h3>Total Games :  {props.total}</h3>
            <h3>Total Wins 'O' : {props.wino}</h3>
            <h3>Total Wins 'X' : {props.winx}</h3>
            <h3>Total Draws : {props.draw}</h3>
        </div> 
    );
}

export default ScoreBoard;





/*
class ScoreBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalGames:props.total,
            winO:props.wino,
            winX:props.winx,
            totalDraws:props.draw
        }
        console.log(props.a);
        var currTotal = this.state.totalGames+this.props.a;
        var currWinO = this.state.winO+props.b;
        var currWinX = this.state.winX+props.c;
        var currDraw = this.state.totalDraws+props.d;
        this.setState({currTotal,currWinO,currWinX,currDraw});
    }


    getInitialState=()=>{
        return {
            totalGames:0,
            winO:0,
            winX:0,
            totalDraws:0
        };
    }
}
*/

//<ScoreBoard total={this.state.total} wino={this.state.wino} winx={this.state.winx} draw={this.state.draw} />
