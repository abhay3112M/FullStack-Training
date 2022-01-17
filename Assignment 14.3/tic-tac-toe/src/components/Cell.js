import React from 'react';
import {cellBorder} from '../services/Cell_border'

const Cell = ({value,onCellClick,gameover,id,winseq,winner}) => {
    let handleCellClick=() => onCellClick(id);

    let style={};
    let result = cellBorder(id);
    if(!result.bl) style.borderLeft =0;
    if(!result.bt) style.borderTop = 0;
    if(!result.br) style.borderRight = 0;
    if(!result.bb) style.borderBottom = 0;

    if(value!=='_' || gameover){
        style.cursor='not-allowed';
        handleCellClick=null; //no event will be triggered.
    }
    if(winseq)    style.backgroundColor="#99ff99"; //light green
    if(value==='_') value = "";
    if(gameover && !winner)
        style.opacity=0.3;

    return (
        <button className='cell' style={style}
            onClick={handleCellClick}>
            {value}
        </button>
    );

}


export default Cell;