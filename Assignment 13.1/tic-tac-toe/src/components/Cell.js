import React from 'react';
import Check from './Checker';
import Status from './Status';

const Cell=(props)=>{

    let value=props.value;
    let arr2d = props.grid;
    let r = props.r;
    let c = props.c;
    
    const [buttonTitle, setButtonTitle] = React.useState("_");
    const handleClick=()=>{
        var zero=0,cross=0;

        //check turn
        for(var i=0;i<3;i++)
            for(var j=0;j<3;j++)
                if(arr2d[i][j]=='O') zero++;
                else if(arr2d[i][j]=='X') cross++;
        
        //Decide turn
        var turn = zero===cross?"O":"X";
        var player = turn==="O"?1:2;
        arr2d[r][c]=turn;
        setButtonTitle(turn);

        //check verdict
        if(Check(arr2d,r,c)==='W'){
            alert(`Won Player ${player}`);
            console.log(`won Player ${player} after placing ${turn}`);
        }
        else if(Check(arr2d,r,c)==='D'){
            alert("Draw No one won");
            console.log("Draw No one won")
        }
        else
            console.log("wait.../play");
    }


    return (
            <button className='cell' onClick={handleClick}>
                {buttonTitle}
            </button>
            );
            
}


export default Cell;