const Check=(grid,r,c)=>{
    var count = 0;
    //row check
    for(var j=0;j<3;j++)
        if(grid[r][j]===grid[r][c]) count++;
    if(count===3) return "W";

    //col check
    count = 0;
    for(var i=0;i<3;i++)
        if(grid[i][c]===grid[r][c]) count++;
    if(count===3) return "W";

    //diag check
    if((r+c)%2===0){
        //diag1
        count = 0;
        for(var i=0;i<3;i++)
            if(grid[i][i]===grid[r][c]) count++;
        if(count===3) return "W";

        //diag2
        count = 0;
        for(var i=2;i>=0;i--) 
            if(grid[2-i][i]===grid[r][c]) count++;
        if(count===3) return "W";
    }

    count = 9;
    for(var i=0;i<3;i++)
        for(var j=0;j<3;j++)
            if(grid[i][j]!=='_') count--;
            else return "C";
    
    if(count===0) return "D";
    return "C";
}

export default Check;


