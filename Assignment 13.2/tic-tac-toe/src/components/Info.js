import React from 'react';

const Info=()=>{
    return(
        <div className='info'>
            <h3 className="h2tag">Gameplay</h3>
            <p className='temp'>Tic-tac-toe is played on a three-by-three grid by two players, who alternately place the marks X and O in one of the nine spaces in the grid.
                In the following example, the first player (X) wins the game in seven steps:</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Tic-tac-toe-game-1.svg/719px-Tic-tac-toe-game-1.svg.png" width="600" height="100"></img>
            <p className='temp'>There is no universally-agreed rule as to who plays first, but in this article the convention that X plays first is used.
                Players soon discover that the best play from both parties leads to a draw. Hence, tic-tac-toe is often played by young children who may not have discovered the optimal strategy
            </p>
            <h3 className="h2tag">History</h3>
            <p className='temp'>
            Games played on three-in-a-row boards can be traced back to ancient Egypt,
            where such game boards have been found on roofing tiles dating from around 1300 BC.
            An early variation of tic-tac-toe was played in the Roman Empire, around the first century BC. 
            It was called terni lapilli (three pebbles at a time) and instead of having any number of pieces, 
            each player had only three; thus, they had to move them around to empty spaces to keep playing.
            The game's grid markings have been found chalked all over Rome. Another closely related 
            ancient game is three men's morris which is also played on a simple grid and requires three pieces in a row to finish, 
            and Picaria, a game of the Puebloans.
            </p>
        </div>
    );
}
export default Info;